import { useState } from "react"
import "./css/big-box.css"

export default function SmallBox() {

    const [ infos, setInfos ] = useState([
        {title: "Hello", text: "hello again", textTwo:"Whatsup", id: 1},
        {title: "Hello2", text: "hello again2", textTwo:"Whatsup2", id: 2},
    ])


  return (
    <div className="hero">
        {infos.map((info) => (
            <div className="small-box box" key={info.id}>
                <h1>{info.title}</h1>
                <p>{info.text}</p>
                <h3>{info.textTwo}</h3>
            </div>
        ))}
    </div>
  )
}
