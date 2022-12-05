import { ProgressBar } from "react-bootstrap"
import './SkillLabel.css'
const SkillLabel =(props) =>{

    const {label,variant,percentage} =props;

    return(
        <div>
        <div className='skill'>
        <h5 className="Barlabel">{label}</h5>
        <ProgressBar variant={variant} now={percentage} label={percentage} />
        </div>
        </div>

    )

}

export default SkillLabel;