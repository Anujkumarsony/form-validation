import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpass, setConfirmpass] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (name && email && password && confirmpass) {
      if (password === confirmpass) {
        alert("sign in successfully");
      } else {
        alert("ERR password and confirm password must be same");
      }
    } else {
      alert("all field are required");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Name</p>
            <input
              type="text"
              onChange={(event) => setName(event.target.value)}
              autoComplete="off"
              name="name"
              id="name"
              placeholder="name"
            />
            {submitted && !name && <p>Name is required</p>}
          </div>
          <div>
            <p>Email</p>
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="off"
              name="email"
              id="email"
              placeholder="email"
            />
            <p>{email ? "" : "Email is required"}</p>
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="off"
              name="password"
              id="password"
              placeholder="password"
            />
            <p>{password ? "" : "password is required"}</p>
          </div>
          <div>
            <p>Confirm Password</p>
            <input
              type="password"
              onChange={(event) => setConfirmpass(event.target.value)}
              autoComplete="off"
              name="confirmpass"
              id="confirmpass"
              placeholder="confirm password"
            />
            <p>{confirmpass ? "" : " conform password is required"}</p>
          </div>
          <div>
            <button>sign up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
