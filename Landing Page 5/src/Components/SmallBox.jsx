import { useState } from "react"
import "./css/big-box.css"

export default function SmallBox() {

    const [ infos, setInfos ] = useState([
        {title: "21.8Mil+", text: "Analysis", textThree:"Based on observation and existing knodledge scientists prpose e testable explanation or hypothesis to answer. ", id: 1},
        {title: "2024", text: "Community", textThree:"New evidence and discoveries can lead to the modification or rejection of existing theoris and the development.", id: 2},
    ])


  return (
    <div className="small-wrapper">
        {infos.map((info) => (
            <div className="small-box box" key={info.id}>
                <h1>{info.title}</h1>
                <h3>{info.text}</h3>
                <p>{info.textThree}</p>
            </div>
        ))}
    </div>
  )
}
