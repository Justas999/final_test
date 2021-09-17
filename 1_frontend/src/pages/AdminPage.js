import React from 'react';
import CreateForm from '../components/CreateForm';
import DeleteForm from '../components/DeleteForm';
import ReadForm from '../components/ReadForm';
import UpdateForm from '../components/UpdateForm';

const AdminPage = () => {
  return (
    <>
      <h3>Administratoriaus aplinka</h3>
      <CreateForm />
      <UpdateForm />
      <ReadForm />
      <DeleteForm />
    </>
  );
};

export default AdminPage;
