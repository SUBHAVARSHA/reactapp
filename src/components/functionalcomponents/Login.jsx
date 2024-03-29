import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const useLogin= () => {
   
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          {/* Add logout button or redirect to another page */}
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form>
            <label>
            <b>
              Username:
              </b>
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <br />
            <label>
              <b>
              Password: 
              </b>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
     
             />
            </label>
            <br />
            <button type="button" onClick={useLogin}>
              Login
            </button><br></br>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
