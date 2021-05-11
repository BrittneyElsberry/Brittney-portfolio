
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const Navigation = ()=>{

const [showMenu, setShowMenu] = useState(false);
// const [isMobile, setIsMobile] = useState(false);


    
    return(

        <Card>
        <div className='nav-container'>
             <FontAwesomeIcon    icon={faBars}
                                 className='ham-btn'
                                 
                                 onClick={()=>setShowMenu(!showMenu)}
                />


          
                
            

                <div className='is-not-mobile'>
                        <button className='nav-btn'>
                            About
                        </button>

                        <button className='nav-btn' >
                            Projects
                        </button>
                        <button className='nav-btn' >
                            Contact
                        </button>

                </div>
            
                
            

        </div>
        </Card>
    )

}

export default Navigation;

const Card = styled.div`

.nav-container{
    background-color: #001219;
    padding: 2%;

}

.is-not-mobile{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
 
}

.nav-btn {
    border: .2px solid white;
    color: white;
    font-size: 1.50rem;
    margin: auto;
    background-color: #001219;
    border-radius: 3%;
}

@media screen and (min-width: 200px) and (max-width: 520px){

    
 }


@media screen and (min-width: 520px) and (max-width: 1000px){

    .nav-container{
        height: 8vh;
    }
   

}



@media screen and (min-width: 1000px) and (max-width: 1400px){

    .nav-btn {
     
        font-size: 1.20rem;
    }

   
    
    .is-not-mobile{
      
        padding: 1%;
    }


}


@media screen and (min-width: 1400px) and (max-width: 2000px){

    .is-not-mobile{
      
        padding: 1%;
    }

    .nav-btn {
  
        font-size: 1.20rem;
    }


}

@media screen and (min-width: 2000px) and (max-width: 3500px){

   
}






`