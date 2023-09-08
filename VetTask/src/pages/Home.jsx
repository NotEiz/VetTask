import './Home.scss';
import {Btn, DeleteBtn} from '../components/styled/StyledButtons';
import { useEffect, useState } from 'react';
import { PetCard } from '../components/styled/PetCard';
import {useNavigate} from 'react-router-dom';
import { LOG_PATH , NEW_PET_PATH} from '../Routes/Routes';



const Home = () => {
     const [Pets, setPets] = useState([]);
     useEffect(() => {
          fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets')
          .then(resp => resp.json())
          .then(pets => setPets(pets))
          .catch(err => console.log(err));
     });
const navigate = useNavigate()
     
     

     const handleDelete = (id) => {
          fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${id}`, {method: 'DELETE'})
          .then(resp => resp.ok)
     };

  return (
     <>
          <div className="mainContainerTop">
               <h1>Pets List</h1>
               <Btn onClick={() => navigate(NEW_PET_PATH)}>ADD PET</Btn>
         </div>
          <div className='mainContainer'>
               {Pets.length > 0 ? 
                    Pets.map(pet => <PetCard key={pet.id} >
                    <h1>{pet.name}</h1>
                    <div className='mainContainerMiddle'>
                         <h3>2023-09-06</h3>
                         <h3>{pet.client_email}</h3>
                    </div>
                    <div className='mainContainerButtons'>
                         <Btn onClick={() => {
                              navigate(LOG_PATH)
                         }}>VIEW LOG</Btn>
                         <DeleteBtn onClick={() => handleDelete(pet.id)}>DELETE</DeleteBtn>
                    </div>
               </PetCard> ) 
               :
               <p>There are no pets registered</p> 
               }  
          </div>
     </>     
  )
};
export default Home