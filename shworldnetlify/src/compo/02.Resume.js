
/* const styleBody = {backgroundColor : 'white', color: 'black', marginLeft: '35px'} */

import img1 from '../img/1png.png';
import img2 from '../img/2png.png';






const a = {  textdecoration: 'none', color: 'violet' ,margin:'20px'}

 

function Resume() {

    return (
        <body  className="project1body">

 
           
           <img className="project1png" src={img1}/>
           
           <br></br> <br></br>  
 
            <a style={a}  target='_blank'>E-mail : hope69034@gmail.com</a>
            <a  className='project1aa'   href="https://velog.io/@shlog/" target='_blank'>Blog</a>
     
            <a className='project1aa'  href="https://github.com/hope69034" target='_blank'>Github</a>
       
            <a className='project1a' href="https://blog.naver.com/sogm5093" target='_blank'>Supporters Blog</a>
        
            <a className='project1a' href="https://velog.io/@shlog/알고리즘-경진대회" target='_blank'>AlgorithmCompetition Review</a>
   
 
            <br></br><br></br>  <br></br>
             
            <img className="project1png" src={img2}/>
            <br></br><br></br>
            <a className='project1a' href="https://velog.io/@shlog/첫프로젝트기록" target='_blank'>  Project1 Review</a> 
            
            <a className='project1a' href="https://velog.io/@shlog/ppt" target='_blank'> Project1 Process</a> 
            
            <a className='project1a' href="https://velog.io/@shlog/%EB%91%90%ED%94%BC-%EC%A7%84%EB%8B%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%B5%9C%EC%A2%85-%EC%BD%94%EB%93%9C-%EC%A0%80%EC%9E%A5" target='_blank'>Project1 Code</a>
            
            
            <br></br><br></br><br></br>
        </body>
    )
}

export default Resume;