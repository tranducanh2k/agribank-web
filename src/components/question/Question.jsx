import {useState} from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './Question.css'

const Question = ({ question, content }) => {

    const [expanded, setExpanded] = useState(false);

    const handleExpand = (e) => {
        setExpanded(!expanded);
    }

    return (
        <div className='question' onClick={handleExpand}>
            <div className='appearFirst'>
                { !expanded ? <ExpandMoreIcon sx={{color: '#a51739'}} /> : <ExpandLessIcon sx={{color: '#a51739'}} /> }
                <span>{ question }</span>
            </div>
            {
                expanded && <p>{ content }</p>
            }    
        </div>
    )
}

export default Question