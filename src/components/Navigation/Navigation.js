import './Navigation.scss'
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navigation = ()=>{

const [showMenu, setShowMenu] = useState(false);
// const [isMobile, setIsMobile] = useState(false);


    
    return(


        <div className='nav-container'>
             <FontAwesomeIcon    icon={faBars}
                                 className='ham-btn'
                                 
                                 onClick={()=>setShowMenu(!showMenu)}
                />


            
                {/* <>'
                <FontAwesomeIcon icon={faBars}
                                 onClick={()=>setShowMenu(!showMenu)}
                />
        
                <h1>This is the tablet or Mobile screen size</h1>
                </> */}
                
            

                <div className='is-not-mobile'>
                        <button>
                            About
                        </button>

                        <button>
                            Projects
                        </button>

                </div>
            
                
            

        </div>
    )

}

export default Navigation;