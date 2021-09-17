import React from 'react';

const DeleteForm = () => {
  return (
    <div>
      <section>
        <br />
        <h4>Ištrinti dalyvius</h4>
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
    </div>
  );
};

export default DeleteForm;
