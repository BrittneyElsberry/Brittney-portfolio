import './Contact.css'
import styled from 'styled-components';
import {FaLinkedin} from 'react-icons/fa'



const Contact = () =>{

    return (
        <div className='contact-container'>
                <Card>
                    <div className='container'>
                        <h1>
                            Contact Me
                        </h1>
                        LinkedIn
                        <FaLinkedin/>
                    </div>
                </Card>
        </div>
    )
}

export default Contact;



const Card = styled.div`

.container{
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 10%;
  border-radius: 25%;
  background-color:  #edf2fb;
  height: 10%;
  width: 10%;

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