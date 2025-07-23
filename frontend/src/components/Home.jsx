import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion} from '@fortawesome/free-solid-svg-icons';
import { faComments} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className='main'>
    <div className='hero-section container'>


    <h1> Empowering Your Health with<br></br> <span>AI-Powered</span> Care</h1>
    
    <p>Welcome to Medaxis — your intelligent virtual healthcare companion.
Experience instant, reliable, and personalized medical support, anytime and anywhere. From answering your health-related questions to checking symptoms and can providing expert-recommended precautions for predicted diseases, Medaxis empowers you to take control of your well-being with confidence. Whether you're seeking guidance, reassurance, or preventive care, Medaxis is here to make healthcare smarter, simpler, and more accessible than ever before.</p>
    <Link to={"/intro"} className='btn btn-outline-dark'> What's Medaxis <FontAwesomeIcon icon={faQuestion} /></Link>
    <Link to={"/chatbot"} className='btn btn-outline-dark btn2'> Try Medaxis <FontAwesomeIcon icon={faComments} /></Link>
    </div>
    
    
    
    </div>
    </>
  )
}

export default Home