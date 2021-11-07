import { useState } from "react";
import Button from "../../common/Button";
import { login } from "./service";
import { AuthContextConsumer } from "../context";

function LoginPage({ onLogin, history, location }) {
  const [value, setValue] = useState({ email: "", password: "" });
  const [checked, setCheck] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const isChecked = (event) => {
    setCheck(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(value, checked);
      onLogin();
      const { from } = location.state || { from: { pathname: "/" } };
      history.replace(from);
    } catch (error) {
      setError(error);
    }
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
        <div>
          Mantener la sesión iniciada
          <input
            type="checkbox"
            name="checkbox-login"
            checked={checked}
            onChange={isChecked}
          />
        </div>

        {/* SACAR EL ARCHIVO DEL TARGET>INPUT>FILES DEL EVENTO event.target.input.current.files??? <input type="file" onChange={(event) => console.log(event)} /> */}
        <Button
          type="submit"
          variant="primary"
          className="login-submit"
          disabled={!value.email || !value.password}
        >
          Enter
        </Button>
      </form>
      {error && <div className="loginPage-error">{error.message}</div>}
    </div>
  );
}

const ConnectedLoginPage = (props) => (
  <AuthContextConsumer>
    {(auth) => <LoginPage onLogin={auth.handleLogin} {...props} />}
  </AuthContextConsumer>
);

export default ConnectedLoginPage;
