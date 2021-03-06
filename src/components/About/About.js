import './About.css'
import styled from 'styled-components';

const About = ()=>{

    return (
        <div className='about-container'>
            <Card>
                        <div className='container' >
                            <div className='about-text-container'>

                            <p>About Me:</p>
                            <div className='profile-image'>
                            </div>


                            </div>
                    
                        </div>
                
                            <p className='about-me'> 
                            my background is 
                            </p>
            </Card>
        </div>
    )
}

export default About;

const Card = styled.div`


@media screen and (min-width: 200px) and (max-width: 520px){

    .about-container{
        height: 200vh;
        width: 100vw;
        background-color: yellow;
    }

    .parent-container{
        display: flex;
        box-sizing: border-box;
        margin: auto;
    }
    
    .container{
      display: flex;
      justify-content: center;
      margin: auto;
      padding: 10%;
    
      height: 50%;
      width: 50%;
   
     
    }
    .profile-image{
        display: flex;
        justify-content: center;
        margin: auto;
        height: 50%;
        width: 100%;
        background-color: orange;
        background: url('profile-pic-try-again.jpg');
    }
    
    .container{
        height: 20vh;
        width: 50%;
        background-color: blue;
    }


}

@media screen and (min-width: 520px) and (max-width: 1000px){

    .parent-container{
        display: flex;
        box-sizing: border-box;
        margin: auto;
    }
    


    .about-text-container{
        background-color:  #edf2fb;
        border: 4px solid white;
        height: 100%;
        width: 100%;
    }


    .profile-image{
        display: flex;
        justify-content: center;
        margin: auto;
        height: 50%;
        width: 100%;
       
    }
    
    .container{
        height: 100vh;
        width: 100vw;
        background-color: #001219;
     
    }



}


@media screen and (min-width: 1000px) and (max-width: 1400px){


}


@media screen and (min-width: 1400px) and (max-width: 2000px){


}

@media screen and (min-width: 2000px) and (max-width: 3500px){

}


`