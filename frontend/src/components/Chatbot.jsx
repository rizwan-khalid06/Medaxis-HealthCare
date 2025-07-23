import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope} from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


function Chatbot() {
  const [authorized, setAuthorized] = useState(false);
  const [userName, setUserName] = useState('');
  const [inputSymptoms, setInputSymptoms] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserName = localStorage.getItem('userName');

    if (!token) {
      navigate('/login');
    } else {
      setAuthorized(true);
      setUserName(storedUserName || 'User');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const symptomsArray = inputSymptoms
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s !== '');

    if (symptomsArray.length < 5) {
      setError('Please enter at least five symptoms.');
      setResponse(null);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://127.0.0.1:8000/predict/', {
        symptoms: inputSymptoms.trim()
      });

      setResponse(res.data);
      setError('');

      await axios.post('http://localhost:8081/save-chat', {
        user_input: inputSymptoms,
        bot_response: res.data.predicted_disease || res.data.message,
        description: res.data.description || '',
        precautions: res.data.precautions || []
      }, {
        headers: { Authorization: token }
      });

    } catch (err) {
      const detail =
        err.response?.data?.detail || err.response?.data?.message || 'An error occurred';
      setError(detail);
      setResponse(null);
    }
  };

  const handleClear = () => {
    setInputSymptoms('');
    setResponse(null);
    setError('');
  };

  const fetchChatHistory = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get('http://localhost:8081/chat-history', {
        headers: { Authorization: token }
      });
      setChatHistory(res.data.history);
    } catch (err) {
      console.error('Error fetching chat history:', err);
    }
  };

  const handleToggleHistory = () => {
    const newShow = !showHistory;
    setShowHistory(newShow);
    if (newShow) fetchChatHistory();
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return authorized ? (
    <div className='chatbody-main'>
      <div className={`history-slider ${showHistory ? 'show' : ''}`}>
        <h3>Chat History</h3>
        {chatHistory.length === 0 ? (
          <p>No previous chats</p>
        ) : (
          chatHistory.map((chat, index) => (
            <div key={index} className="chat-entry">
              <p><strong>You:</strong> {chat.user_input}</p>
              <p><strong>Predicted:</strong> {chat.bot_response}</p>
              {chat.precautions?.length > 0 && (
                <>
                  <p><strong>Precautions:</strong></p>
                  <ul>
                    {chat.precautions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))
        )}
      </div>

      <div className="chatbot-wrapper">
        <div className="chatbot-container">
          <h1>Hello, <span className="username">{userName}!</span></h1>
          <form onSubmit={handleSubmit} className="chatbot-form">
            <textarea
              className="symptom-textarea"
              placeholder="Enter at least 5 symptoms, separated by commas"
              value={inputSymptoms}
              onChange={(e) => {
                setInputSymptoms(e.target.value);
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
              rows={1}
            />

            <div className="button-group">
              <button type="submit" className="btn submit-btn">Predict <FontAwesomeIcon icon={faMicroscope} /></button>
              <button type="button" className="btn clear-btn" onClick={handleClear}>Clear <FontAwesomeIcon icon={faXmark} /></button>
              <button className="btn logout-btn" onClick={handleLogout}>Logout <FontAwesomeIcon icon={faRightFromBracket} /></button>
            </div>
          </form>

          {error && <p className="error-text">{error}</p>}

          {response && response.predicted_disease && (
            <div className="response-box">
              <h3>Predicted Disease: <span className="predicted-disease">{response.predicted_disease}</span></h3>
              <p><strong>Description:</strong> {response.description}</p>
              {response.precautions?.length > 0 && (
                <>
                  <p><strong>Precautions:</strong></p>
                  <ul>
                    {response.precautions.map((precaution, index) => (
                      <li key={index}>{precaution}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}

          {response && !response.predicted_disease && (
            <div className="response-box">
              <p>{response.message}</p>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={handleToggleHistory}
        className="history-btn"
      >
        {showHistory ? 'Hide History' : 'Show History'}
      </button>
    </div>
  ) : null;
}

export default Chatbot;
