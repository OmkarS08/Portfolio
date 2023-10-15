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
    const handleWhatsAppCLick=()=>{
        window.location.replace('https://wa.me/971522767248')

    }

    return(<div>
    <h2 className='contact-title'>Follow me</h2>
    <ul>
        <li><Button  variant='outline-dark' onClick={handleGitClick}><FaGithub size='2em'/> GitHub</Button></li>
        <li><Button variant='outline-dark' onClick={handleLinkClick}><FaLinkedin size='2em'/> linkedIn</Button></li>
        <li><Button variant='outline-dark' onClick={handleInstaClick}><FaInstagram size='2em'/> Instagram</Button></li>
        <li><Button variant='outline-dark' onClick={handleWhatsAppCLick} className='whatsapp-button'><FaWhatsapp size='2em' />Whatsapp</Button></li>
    </ul>
    </div>)
}