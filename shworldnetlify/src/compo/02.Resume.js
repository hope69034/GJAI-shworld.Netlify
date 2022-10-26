
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
        </body>
    )
}

export default Resume;