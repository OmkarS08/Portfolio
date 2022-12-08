 import './ContackLinks.css'
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
        <li><button  onClick={handleGitClick}><FaGithub size='2em'/>Github</button></li>
        <li><button onClick={handleLinkClick}><FaLinkedin size='2em'/>linkedin</button></li>
        <li><button onClick={handleInstaClick}><FaInstagram size='2em'/>Instagram</button></li>
        <li><button disabled className='whatsapp-button'><FaWhatsapp size='2em' />+971 522767248</button></li>
    </ul>
    </div>)
}