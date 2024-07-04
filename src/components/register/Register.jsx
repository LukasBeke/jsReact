import React, { useState } from 'react';
import { auth } from '../../firebase';
import { addNewUser } from '../firestoreComponents/firestoreComponents';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      await addNewUser({ uid: user.uid, name, email });
      console.log('Registracija sėkminga:', user.uid);
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Registracijos klaida:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Registracija</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Vardas</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">El.paštas</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Slaptažodis</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Registruotis</button>
        <a href="/" className="btn btn-primary ms-2">Prisijungti</a>
      </form>
    </div>
  );
};

export default Register;
