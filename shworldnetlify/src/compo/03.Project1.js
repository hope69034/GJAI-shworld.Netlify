
import React from 'react';
import imgA from '../img/project1png.png';
import { Link } from 'react-router-dom'

function Project1() {

    return (

        
        <body className="project1body">
           
            <img className="project1png" src={imgA}/>
            <br></br><br></br>
            <a className='project1a' href="https://velog.io/@shlog/첫프로젝트기록" target='_blank'>  Project1 Review</a> 
            
            <a className='project1a' href="https://velog.io/@shlog/ppt" target='_blank'> Project1 Process</a> 
            
            <a className='project1a' href="https://velog.io/@shlog/%EB%91%90%ED%94%BC-%EC%A7%84%EB%8B%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%B5%9C%EC%A2%85-%EC%BD%94%EB%93%9C-%EC%A0%80%EC%9E%A5" target='_blank'>Project1 Code</a><br></br>
            
            <br></br><br></br>
        </body>
        

    )
}

export default Project1;