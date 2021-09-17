import React from 'react';

const UpdateForm = () => {
  return (
    <>
      <section>
        <br />
        <h4>Atnaujinti duomenis</h4>
        <form>
          <label htmlFor='name'>Vardas</label>
          <input type='name' />
          <br />
          <label htmlFor='age'>Amžius</label>
          <input type='age' />
          <br />
          <label htmlFor='email'>El-paštas</label>
          <input type='email' />
          <br />
          <label htmlFor='password'>Slaptažodis</label>
          <input type='email' /> <br />
          <input type='submit' />
          <br />
        </form>
      </section>
    </>
  );
};

export default UpdateForm;
