import styled from 'styled-components';
import './Introduction.css';
import {FaNodeJs} from 'react-icons/fa';
import {SiPostgresql} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {ImHtmlFive} from 'react-icons/im';
import {FaCss3Alt} from 'react-icons/fa';
import {FaSass} from 'react-icons/fa';
import {SiStyledComponents} from 'react-icons/si';


const Introduction = () =>{

return (


            <div className='introduction-container'>
                    <Card>
    
        
                        <div className='name-container'> 
                       
                            <div className='picture-container'></div>

                                Hi my name is Brittney Elsberry, <br></br>
                                Full Stack Web Developer.
                                {/* <p className='hana-text'>and this cute pup is my girl Hana.</p>  */}
                 
                             
                        </div>

                        <div className='icon-container'>
                            <FaReact className='react-icon'/>
                            <FaNodeJs className='node-icon'/>
                            <FaCss3Alt  className='css-icon'/>
                            <FaSass  className='sass-icon'/>
                            <ImHtmlFive className='html-icon'/>
                            <SiPostgresql className='postgreSQL-icon'/>
                            <SiStyledComponents className='styled-components-icon'/>
                        </div>
                

                
           
                    </Card>
            </div>
)

}

export default Introduction;

// const ImageWrapper = styled.img`

// width: 30px;
// heigth: 30px;
// margin: 15px;
// `


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

    .react-icon, .node-icon, .html-icon, .sass-icon, .css-icon, .postgreSQL-icon, .styled-components-icon{
        font-size: 30px;
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

    .introduction-container{
       
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        background-color: #e2eafc;

    }
 
    .name-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-weight: bold;
        margin-left: 70%;
        height: 30vh;
        margin-top: 1%;
      width: 25vw;
      padding: 2%;
      background-color:  #edf2fb;
      color: #001219;
    //   color: #00a896; 
      font-size: 1.20rem;
      border: .06rem solid #001219;
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
 
     
    }



    .hana-text{
        font-size: 1.0rem;
        color: #001219;
    }
    


    .icon-container{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 18%;
        // margin-left: 5%;
        margin-top: 44%;
        background-color:  #edf2fb;
        // border-radius: 5%;
        // border: 0.04rem solid rgba(0,0,0,0.2);
        // box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        // border-radius: 2%;
        animation-name: slide;
        animation: pulse 5s infinite;
        animation-duration: 4s;

        @keyframes{
            from{left: -100%};
            to{left: 50};     
     

        }
    }

    .react-icon, .node-icon, .html-icon, .sass-icon, .css-icon, .postgreSQL-icon, .styled-components-icon{
        font-size: 40px;
    }

}



@media screen and (min-width: 1000px) and (max-width: 1400px){



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
      margin-left: 15%;
      margin-top: 5%;
      padding: 4%;
      border-radius: 25%;
      background-color:  #edf2fb;
      height: 25%;
      width: 60%;
      color: #00a896; 
      font-size: 2.50rem;
      border: 0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
      border-radius: 15%;
     
    }
    


    .icon-container{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 70%;
        height: 10%;
        margin-left: 14%;
        margin-top: 5%;
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

    .react-icon, .node-icon, .html-icon, .sass-icon, .css-icon, .postgreSQL-icon, .styled-components-icon{
        font-size: 50px;
    }
   


}


@media screen and (min-width: 1400px) and (max-width: 2000px){

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

@media screen and (min-width: 2000px) and (max-width: 3500px){

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

    .icon-container{
        display:flex;
    }
}






`