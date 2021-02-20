import React from "react";
import {
    useLocation,
} from "react-router-dom";
import {Bigbox, Head} from './Styles';
import {data} from '../../data';


function About() {
  
    const id = new URLSearchParams(useLocation().search).get("id");
    const element = data.filter((ele)=> +id===ele.id)[0];
    return (
      <Bigbox>
        <Head>{element.class}</Head>
        <h3>{element.subject}</h3>
        <h4>{element.faculty}</h4>
        <p>{element.description}</p>
        <img src={element.image}></img>
        <ol>
          {element.topics.map(topicele=>
          <li key={topicele}>{topicele}</li>
          )}
        </ol>
      </Bigbox>
    );
  }


  export default About;