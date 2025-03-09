import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole(props) {
  // destructure props you plan on using
  const { isVisible, onMoleWhacked } = props

  // increment score by 1 and hide mole image with onClick event handler below
  const whackMole = (e) => {
    onMoleWhacked()
    const img = e.target
    img.style.display = "none"
  }

  return (
    <div className="den">
      {isVisible &&
      <img 
        src={MoleIcon} 
        className="Mole" 
        alt="Mole"
        onClick={whackMole}
      />}
    </div>
  )
}

export default Mole