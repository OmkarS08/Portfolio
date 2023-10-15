import './Footer.css'
export const Footer=()=>{

    const date =()=>{
        const d = new Date();
        let year = d.getFullYear();
        return (year)
    }
    return(<div>
        <footer>
        <div className='center'>
        <p>Made by OmkarS &copy;  @{date()}</p>
        </div>
        </footer>
    </div>)
}