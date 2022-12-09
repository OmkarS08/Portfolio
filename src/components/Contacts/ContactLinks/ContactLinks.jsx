 import './ContackLinks.css'
 import { Button } from 'react-bootstrap'
 import { FaGithub,FaLinkedin,FaWhatsapp,FaInstagram} from "react-icons/fa"
export const ContactLinks=()=>{

    const handleGitClick=()=>{
        window.location.replace('https://github.com/OmkarS08');

        return null;
    }
    const handleInstaClick=()=>{
        window.location.replace('https://www.instagram.com/omi_s__08');

        return null;
    }
    const handleLinkClick=()=>{
        window.location.replace('https://www.linkedin.com/in/omkar-shelke-4b4ba9139');

        return null;
    }
    return(<div>
    <h2 className='contact-title'>Follow me</h2>
    <ul>
        <li><Button  variant='outline-dark' onClick={handleGitClick}><FaGithub size='2em'/>Github</Button></li>
        <li><Button variant='outline-dark' onClick={handleLinkClick}><FaLinkedin size='2em'/>linkedin</Button></li>
        <li><Button variant='outline-dark' onClick={handleInstaClick}><FaInstagram size='2em'/>Instagram</Button></li>
        <li><Button variant='outline-dark' disabled className='whatsapp-button'><FaWhatsapp size='2em' />+971 522767248</Button></li>
    </ul>
    </div>)
}