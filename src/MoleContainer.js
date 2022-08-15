import EmptySlot from './EmptySlot'
import Mole from './Mole'
import {useState} from 'react'

function MoleContainer(props){

    let [showMole, setMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setMole(false)
    }

    let displayMole = showMole ? <Mole setScore={props.setScore} toggle={setMole} handleClick={handleClick} /> : <EmptySlot toggle={setMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer