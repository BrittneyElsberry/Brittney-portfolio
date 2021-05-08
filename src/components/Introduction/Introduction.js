import './Introduction.css'
import styled from 'styled-components';

const Introduction = () =>{

return (
    <div className='introduction-container'>
        <Card>
            <h1 className='container'> Hi my name is Brittney Elsberry,
                    Full Stack Web Developer 
            </h1>

        </Card>
           
    </div>
)

}

export default Introduction;

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