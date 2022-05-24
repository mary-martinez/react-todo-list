import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { signInUser, signupUser } from '../services/users';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const resp = await signInUser(email, password);
    setCurrentUser(resp.email);
    history.push('/todos');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const resp = await signupUser(email, password);
    setCurrentUser(resp.email);
    history.push('/todos');
  };

  return (
    <div>
      <h1>Sign In or Sign Up</h1>
      <AuthForm {...{ setEmail, setPassword, handleSignIn, handleSignUp }} />
    </div>
  );
}
