import React from 'react'
import phone from '../../../public/images/icons8-phone-ios-17-filled/icons8-phone-100.png'
import email from '../../../public/images/icons8-email-ios-17-outlined/icons8-email-100.png'
import resume from '../../../public/images/icons8-resume-ios-17-outlined/icons8-resume-100.png'

const FooterComponent = () => {
    return (
        <div className='flex justify-center cursor-pointer'>
        <a href="https://github.com/ZahidAfsar" target="_blank" rel="noopener noreferrer">
          <img className='h-8 w-8 mx-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/zahid-afsar-656969279/" target="_blank" rel="noopener noreferrer">
          <img className='h-8 w-8 mx-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
        </a>
        <a href="tel:+12092716563">
          <img className='h-8 w-8 mx-2' src={phone.src} alt="phone" />
        </a>
        <a href="mailto:zahidtempz@icloud.com">
          <img className='h-8 w-8 mx-2' src={email.src} alt="email" />
        </a>
        <a href="https://docs.google.com/document/d/1syUaBWL0apSMhu4rVx71Dp6JH8aBJwFOe-T5ZsUl5nU/edit?usp=sharing" target='__blank' rel='noopener noreferrer' >
        <img className='h-8 w-8 mx-2' src={resume.src} alt="resume" />
        </a>
      </div>
    )
}

export default FooterComponent
