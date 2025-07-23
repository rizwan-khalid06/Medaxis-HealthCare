import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <>
      <div className='intro py-5'>
        <div className='container'>
          <div className='intro-body text-center mb-5'>
            <h1 className='display-5 fw-bold'>What’s <span className='text-primary'>MedAxis</span>?</h1>
            <h2 className='h4 text-muted mt-3'>Welcome to <span className='text-success'>MedAxis</span> – Your Intelligent Health Companion!</h2>
            <p className='mt-4 text-justify'>
              In a world where timely healthcare guidance makes all the difference, <strong>MedAxis</strong> is your go-to medical chatbot powered by cutting-edge AI. It helps you understand your health better by analyzing symptoms, identifying potential diseases, and now even providing **personalized precautionary advice** for predicted conditions.
              <br /><br />
              With the ability to detect <strong>41 common diseases</strong> based on user symptoms, MedAxis empowers you to take charge of your health — anytime, anywhere. Whether you need early insights before seeing a doctor or immediate guidance, MedAxis is here to support your wellness journey.
            </p>
            <Link to={"/chatbot"} className='btn btn-outline-dark mt-4'>
              Try MedAxis <FontAwesomeIcon icon={faComments} className='ms-2' />
            </Link>
          </div>

          <div className='row g-5 intro-bottom'>
            <div className='col-md-6'>
              <div className='p-4 shadow-sm rounded bg-light h-100'>
                <h2 className='text-center mb-3 text-success'>Advantages</h2>
                <hr />
                <ul className='text-start'>
                  <li>Quickly analyzes symptoms and matches them with 41 known diseases.</li>
                  <li>24/7 access to medical insights — no need to wait for appointments.</li>
                  <li>Reduces unnecessary doctor visits, saving both time and money.</li>
                  <li>User-friendly design for individuals with little medical knowledge.</li>
                  <li>Encourages timely medical attention by recognizing early signs.</li>
                  <li>Provides <strong>precautionary steps</strong> for predicted diseases, helping users take preventive action.</li>
                  <li>Handles multiple users simultaneously — highly scalable.</li>
                  <li>Ensures private, comfortable symptom discussions.</li>
                </ul>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='p-4 shadow-sm rounded bg-light h-100'>
                <h2 className='text-center mb-3 text-danger'>Limitations</h2>
                <hr />
                <ul className='text-start'>
                  <li>Limited to diagnosing only the 41 diseases in its dataset.</li>
                  <li>Doesn’t personalize suggestions based on medical history or lifestyle.</li>
                  <li>Lacks ability for physical examinations and lab testing.</li>
                  <li>Suggestions are only as accurate as the user's symptom input.</li>
                  <li>Not designed to handle complex, rare, or overlapping conditions.</li>
                  <li>Does not offer emotional or psychological support like a human doctor.</li>
                  <li>Incorrect inputs may lead to potential misdiagnosis or confusion.</li>
                  <li>Internet access is required — limited reach in low-connectivity regions.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
