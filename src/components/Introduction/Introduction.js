// import './Introduction.scss'
import styled from 'styled-components';

import {FaNodeJs} from 'react-icons/fa';
import {SiPostgresql} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {ImHtmlFive} from 'react-icons/im';
import {FaCss3Alt} from 'react-icons/fa';
import {FaSass} from 'react-icons/fa';
import {SiStyledComponents} from 'react-icons/si';

const Introduction = () =>{

return (
        <Card>
            <div className='introduction-container'>
                    
                    <h1 className='name-container'> Hi my name is Brittney Elsberry,
                            Full Stack Web Developer 
                    </h1>

                    <div className='icon-container'>
                        <FaReact size={28} className='react-icon'/>
                        <FaNodeJs size={28} className='node-icon'/>
                        <FaCss3Alt size={28} className='css-icon'/>
                        <FaSass size={28} className='sass-icon'/>
                        <ImHtmlFive size={28} className='html-icon'/>
                        <SiPostgresql size={28} className='postgreSQL-icon'/>
                        <SiStyledComponents size={30} className='styled-components-icon'/>
                    </div>
            

                
            </div>
        </Card>
)

}

export default Introduction;

const Card = styled.div`

.react-icon{
    color: #61DBFB;
}

.node-icon{
    color: #68A063;
}

.html-icon{
    color: #E44D26;
}

.sass-icon{
    color: #c69;
}

.css-icon{
    color: #264de4;
}

.postgreSQL-icon{
    color: #264de4;
}

.icon-container{

    animation-name: slide;
    animation: pulse 5s infinite;
    animation-duration: 4s;

    @keyframes{
        from{left: -100%};
        to{left: 50};     
 

    }}

@media screen and (min-width: 200px) and (max-width: 520px){


    .introduction-container{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        background-color: #e2eafc;

    }
 
    .name-container{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5%;
      margin-top: 20%;
      padding: 10%;
      border-radius: 25%;
      background-color:  #edf2fb;
      height: 25%;
      width: 70%;
      color: #00a896; 
      font-size: 1.65rem;
      border: 0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
      border-radius: 15%;
     
    }
    


    .icon-container{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 90%;
        height: 10%;
        margin-left: 5%;
        margin-top: 20%;
        background-color:  #edf2fb;
        border-radius: 5%;
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        border-radius: 2%;
        animation-name: slide;
        animation: pulse 5s infinite;
        animation-duration: 4s;

        @keyframes{
            from{left: -100%};
            to{left: 50};     
     

        }
    }
 }


@media screen and (min-width: 520px) and (max-width: 1000px){

}



@media screen and (min-width: 1000px) and (max-width: 1400px){


}


@media screen and (min-width: 1400px) and (max-width: 2000px){


}

@media screen and (min-width: 2000px) and (max-width: 3500px){

    .icon-container{
        display:flex;
    }
}






`