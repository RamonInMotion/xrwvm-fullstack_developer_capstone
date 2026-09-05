import React, { useState } from 'react';
import "./Register.css";
import Header from '../Header/Header';

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [open, setOpen] = useState(true);

  let register_url = window.location.origin + "/djangoapp/register";

  const register = async (e) => {
    e.preventDefault();

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "userName": userName,
        "password": password,
        "firstName": firstName,
        "lastName": lastName,
        "email": email
      }),
    });

    const json = await res.json();
    if (json.status != null && json.status === "Authenticated") {
      sessionStorage.setItem('username', json.userName);
      setOpen(false);
    } else if (json.error === "Already Registered") {
      alert("The user with the same username is already registered.");
    }
  };

  if (!open) {
    window.location.href = "/";
  }

  return (
    <div>
      <Header />
      <div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          <form className="register_panel" onSubmit={register}>
            <div>
              <span className="input_field">Username </span>
              <input type="text" name="username" placeholder="Username" className="input_field"
                onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div>
              <span className="input_field">First Name </span>
              <input type="text" name="first_name" placeholder="First Name" className="input_field"
                onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
              <span className="input_field">Last Name </span>
              <input type="text" name="last_name" placeholder="Last Name" className="input_field"
                onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
              <span className="input_field">Email </span>
              <input type="email" name="email" placeholder="Email" className="input_field"
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <span className="input_field">Password </span>
              <input name="psw" type="password" placeholder="Password" className="input_field"
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <input className="action_button" type="submit" value="Register" />
              <input className="action_button" type="button" value="Cancel" onClick={() => setOpen(false)} />
            </div>
            <a className="loginlink" href="/login">Already have an account? Login</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
