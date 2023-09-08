import { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import StyledLogo from '../components/styled/StyledLogo';
import { Btn } from '../components/styled/StyledButtons';
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 400px;
  margin: 3rem auto;
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;

  input{
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    border-radius: 5px;
  }
`

const NewPet = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate()

  const handleAddPet = (e) => {
    e.preventDefault();
    const id = Date.now();
    const pet = { id,name,birthDate,email }
    fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets', {
      method: 'POST',
      headers: { 'Content-type': 'aplication/json' },
      body: JSON.stringify(pet)
    }).then(() => console.log('New pet was added'));

    navigate('/')
  }

  return (
    <>
      <StyledForm onSubmit={handleAddPet}>
        <div>
            <StyledLogo/>
        </div>
        <input  value={name} id="name" onChange={e => setName(e.target.value)} placeholder="Pet name"/>
        <div>
          <label>Pet Birth Date</label>
          <input value={birthDate} id="birthdate" type="date" onChange={e => setBirthDate(e.target.value)}/>
        </div>
        <input value={email} type="email"  id="email" onChange={e => setEmail(e.target.value)}  placeholder="Email Address"/>
        <Btn>ADD PET</Btn>
      </StyledForm>
    </>
  )
}

export default NewPet