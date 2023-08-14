
import BigBox from "./BigBox"
import "./css/box-container.css"
import SmallBox from "./SmallBox"

export default function BoxContainer() {



  return (
    <div className="box-container">
        <BigBox />
        <SmallBox />
    </div>
  )
}
