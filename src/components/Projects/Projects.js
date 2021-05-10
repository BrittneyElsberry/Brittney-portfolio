import './Projects.css';
import {useState, useEffect} from 'react';
import {projectsData} from '../data';
import styled from 'styled-components';


const Projects = () =>{



    return (
        <div className='projects-container'>
                <Card>
                {projectsData.map((elem)=>{
                    return <div key={elem.id} className='container'> 
                              <h2>{elem.title}</h2> 
                              <br></br>
                              <span>{elem.info}</span>  
                               <a className='demo-btn'
                                    href={elem.url}>
                                Demo
                               
                               </a>
                            <div className='img-container'>
                            <img src={elem.img} height='300px' width='auto' alt='Project'/>
                            </div>    
                                
                            </div>
                            

                })}
                </Card>

            
        </div>
    )
  }

export default Projects;
const Card = styled.div`

.container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    padding: 10%;
    border-radius: 25%;
    background-color:  #edf2fb;
    height: 50%;
    width: 50%;
   
  }

  .demo-btn{
      border: 2px solid purple;
      text-decoration: none;
      color: #abc4ff;
      width: 10%;
  }



@media screen and (min-width: 200px) and (max-width: 520px) {

    .container{
        display: flex;
        justify-content: center;
        margin: auto;
        padding: 10%;
        border-radius: 25%;
        background-color:  #edf2fb;
        height: 50%;
        width: 50%;
       
      }


      @media screen and (min-width: 520px) and (max-width: 1800px) {
        .container{
            display: flex;
            justify-content: center;
            margin: auto;
            padding: 10%;
            border-radius: 25%;
            background-color:  #edf2fb;
            height: 50%;
            width: 50%;
           
          }

}


@media screen and (min-width: 200px) and (max-width: 520px){ }


@media screen and (min-width: 520px) and (max-width: 1000px){

}



@media screen and (min-width: 1000px) and (max-width: 1400px){


}


@media screen and (min-width: 1400px) and (max-width: 2000px){


}

@media screen and (min-width: 2000px) and (max-width: 3500px){

}




`