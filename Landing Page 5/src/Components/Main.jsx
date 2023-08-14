import Bar from "./Bar"
import BoxContainer from "./BoxContainer"
import "./css/main.css"

export default function Main() {
  return (
    <div className="main">
      <Bar background="linear-gradient(90deg, rgba(118,130,172,0.7) 25%, rgba(224,224,224,0.2) 100%);" height="12vh">
      ○○○ SCIENCE UNIVERSE
      </Bar>

      <BoxContainer />
    </div>
  )
}
