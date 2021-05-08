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
  height: 50%;
  width: 50%;

}



`