from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np
import pandas as pd
from sklearn.preprocessing import normalize

# Load models and preprocessors
model = joblib.load("disease_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")
scaler = joblib.load("scaler.pkl")

# Load datasets
dataset = pd.read_csv("dataset.csv")
symptom_description = pd.read_csv("symptom_Description.csv", encoding='latin1')
symptom_precaution = pd.read_csv("symptom_precaution.csv")
symptom_severity = pd.read_csv("Symptom-severity.csv")

# Merge datasets
merged = pd.merge(dataset, symptom_description, on='Disease', how='left')
merged_data = pd.merge(merged, symptom_precaution, on='Disease', how='left')

# Add missing descriptions
missing_descriptions_dict = {
    "Diabetes": "Diabetes is a chronic medical condition that occurs when the body is unable to regulate blood sugar (glucose) levels properly. It happens due to insufficient insulin production, the body’s inability to use insulin effectively, or both. Insulin is a hormone produced by the pancreas that helps glucose enter cells for energy.",
    "Dimorphic hemmorhoids(piles)": "Dimorphic Hemorrhoids, commonly known as piles, are swollen and inflamed veins in the lower rectum and anus. They can cause discomfort, pain, and sometimes bleeding, particularly during bowel movements. Hemorrhoids are categorized into two types: internal (inside the rectum) and external (under the skin around the anus). Dimorphic hemorrhoids refer to the presence of both types simultaneously.",
    "Hypertension": "Hypertension (HTN or HT), also known as high blood pressure (HBP), is a long-term medical condition in which the blood pressure in the arteries is persistently elevated. High blood pressure typically does not cause symptoms.",
}

# Initialize FastAPI app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust as needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Input model
class SymptomsInput(BaseModel):
    symptoms: str  

# Convert symptoms to model input vector
def symptom_to_vector(symptoms_list):
    input_text = ", ".join(symptoms_list)
    transformed = vectorizer.transform([input_text])
    scaled = scaler.transform(transformed)
    return normalize(scaled)

# Validate if symptoms are known
def symptoms_are_valid(symptoms_list):
    known_symptoms = symptom_severity['Symptom'].str.lower().values
    return any(symptom.lower() in known_symptoms for symptom in symptoms_list)

# Prediction endpoint
@app.post("/predict/")
def predict_disease(input_data: SymptomsInput):
    raw_input = input_data.symptoms.strip()
    symptoms_list = [s.strip().lower() for s in raw_input.split(',') if s.strip()]

    if len(symptoms_list) < 5:
        raise HTTPException(status_code=400, detail="You need to enter at least five symptoms.")

    if not symptoms_are_valid(symptoms_list):
        return {
            "message": "This might be a serious disease. Please consult a doctor as soon as possible."
        }

    try:
        input_vector = symptom_to_vector(symptoms_list)
        predicted_disease = model.predict(input_vector)[0]
    except Exception:
        return {
            "message": "This might be a serious disease. Please consult a doctor as soon as possible."
        }

    disease_row = merged_data[merged_data['Disease'].str.lower() == predicted_disease.lower()]

    if disease_row.empty:
        return {
            "message": "This might be a serious disease. Please consult a doctor as soon as possible."
        }

    row = disease_row.iloc[0]
    description = row['Description']

    if pd.isna(description) or not description.strip():
        description = missing_descriptions_dict.get(predicted_disease.strip(), "No description available.")

    precautions = [row.get(f"Precaution_{i}") for i in range(1, 5) if pd.notna(row.get(f"Precaution_{i}"))]

    return {
        "predicted_disease": predicted_disease,
        "description": description,
        "precautions": precautions
    }
