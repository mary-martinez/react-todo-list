import React from 'react';

export default function AuthForm({ setEmail, setPassword, handleSignIn, handleSignUp }) {
  return (
    <div>
      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Sign-In</button>
      </form>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Sign-Up</button>
      </form>
    </div>
  );
}
