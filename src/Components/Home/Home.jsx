import React from 'react'
import './Home.css'
import resumeSvg from '../../assets/resume.svg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='container'>
    <div className='left'>
      <p className='heading'>
        A <span>Resume</span> that stands out!
      </p>
      <p className='heading'>
        Make your own resume. <span>It's free</span>
      </p>
      <Link to='/form' className='nav_link'>
      <button type="button" className="btn btn-primary button">Create Resume</button>
      </Link>
    </div>
    <div className='right'>
      <img src={resumeSvg} alt="Resume" />
    </div>
  </div>
  )
}

export default Home