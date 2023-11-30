import React from 'react'
import './style.css'


const service = [
    {
        title: "Portfolio Management",
        body: `Portfolio management is the art and science of selecting and overseeing a group of 
                investments that meet the long-term financial objectives and risk tolerance of a client, 
                a company, or an institution.
              `
    },

    {
        title: "Recordkeeping",
        body: `Record keeping is how you log, store and dispose of important financial information for your business. 
                Records are: source documents, both physical and electronic, that show transaction dates and amounts.
              `
    },

    {
        title: "Custodial & Legal Counceling",
        body: `Custody case means a domestic relations case in which the custody of a minor child is an issue, an adoption case,
                or a case in which the family division of circuit court has entered an order terminating parental rights.
              `
    },

    {
        title: "Accounting & Tax Management",
        body: `A tax advisor helps clients minimize tax risk and optimize their financial decisions to reduce overall taxes paid. 
                With a deep understanding of ever-changing tax legislation, a tax advisor ensures their clients.
              `
    }
]

export default function ContentBox() {
  return (
    <div className="content-box-container">
        {service.map((serv) => (
            <div className='content-box'>
            <h3>{serv.title}</h3>
            <p>{serv.body}</p>
            </div>
        ))}
    </div>
  )
}
