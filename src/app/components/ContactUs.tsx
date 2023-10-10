import Image from 'next/image'
import "./ContactUs.scss"

import linkedinLogo from "../assests/icons/linkedin.svg"
import facebookLogo from "../assests/icons/facebook.svg"
import instagramLogo from "../assests/icons/instagram.svg"
import youtubeLogo from "../assests/icons/youtube.svg"

export default function ContactUs() {
    return (
      <main className='contact'>
        <div className='about'>
            <p>Careers</p>
            <p className='special'>About us</p>
            <p>Contact us</p>
        </div>
        <div className='logo'>
            <Image src={linkedinLogo} alt='linkedin' width={20} />
            <Image src={facebookLogo} alt='facebook' width={20} />
            <Image src={instagramLogo} alt='instagram' width={20} />
            <Image src={youtubeLogo} alt='youtube' width={20} />
        </div>
      </main>
    )
  }
  