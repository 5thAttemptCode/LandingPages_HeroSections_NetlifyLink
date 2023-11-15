import React from 'react'
import './style.css'

export default function About() {

  const H6 = ({children}) => <h6>{children}</h6>
  const P = ({children}) => <p>{children}</p>

  return (
    <div className="about">
      <div className="section">
        
        <div>
          <H6>about</H6>
          <br />
          <br />
          <P>CS Studio works in several fields ranging from industrial design, object and space and collaborates with clients from 
            industry and culture as well as on self-initiated projects. By bridging and blending different subjects and fields of 
            practice, CS Studio conceptually explores the environmental and social context of design today and creates transformative 
            and humorous interventions. 
            <br />
            <br />
            The studio was established by Henry Pierre and Alexander Rounde, who are both holding a 
            diploma in industrial design from the State Academy of Fine Arts Wien, Austria. They have also studied at the 
            Alvar Aalto University in Helsinki and at the San José State University in California.
          </P>
        </div>

        <div>
          <H6>contact</H6>
          <br />
          <br />
          <P>CS Studio</P>
          <br />
          <P>Henry Pierre and Alexander Rounde</P>
          <br />
          <P>Beton Straße 100</P>
          <br />
          <P>1010 Wien, Austria</P>
        </div>

        <div>
          <H6>mail</H6>
          <br />
          <P>info@csstudio.com</P>
          <br />
          <H6>phone</H6>
          <br />
          <P>+43 873 2134</P>
          <br />
          <H6>instagram</H6>
          <br />
          <P>@csstudio</P>
        </div>

      </div>
    </div>
  )
}
