import { useState } from "react";
import Button from "../../common/Button";
import { login } from "./service";

function LoginPage({ onLogin }) {
  const [value, setValue] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(value);
    onLogin();
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Nodepop</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={value.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={value.password}
          onChange={handleChange}
        />
        <div>Mantener la sesión iniciada</div>
        <input
          type="checkbox"
          name="checkbox-login"
          checked="true"
          onChange={(event) => console.log(event.target.checked)}
        />

        {/* SACAR EL ARCHIVO DEL TARGET>INPUT>FILES DEL EVENTO event.target.input.current.files??? <input type="file" onChange={(event) => console.log(event)} /> */}
        <Button
          type="submit"
          variant="primary"
          disabled={!value.email || !value.password}
        >
          Enter
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
