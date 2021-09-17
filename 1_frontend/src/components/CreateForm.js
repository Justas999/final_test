import React, { useState } from 'react';
import axios from 'axios';

const CreateForm = () => {
  //Hooks
  //-- state
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Custom functions

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !age || !email || !password)
      return alert('prašome užpildyti visus įvesties laukelius');

    const team = { name, age, email, password };
    axios.post('http://localhost:5000/api/users/login', team);
  };

  return (
    <>
      <br />
      <section>
        <h4>Pateikti duomenis</h4>

        <br />

        <form onSubmit={submitHandler}>
          <label htmlFor='name'>Vardas</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor='age'>Amžius</label>
          <input
            type='number'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <label htmlFor='email'>El-paštas</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor='password'>Slaptažodis</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type='submit' />
          <br />
        </form>
      </section>
    </>
  );
};

export default CreateForm;
