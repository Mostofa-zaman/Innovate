import "./commonButton.css"

const CommonButton = ({buttonName,className})=>{
  return (
      <a href="#" className={`${className} commonButtonClass `}>{buttonName}</a>
  )
}

export default CommonButton