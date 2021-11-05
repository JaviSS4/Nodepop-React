import { useState } from "react";
import Button from "../../common/Button";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Nodepop</h1>
      <form>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
        <input
          type="checkbox"
          name="checkbox-login"
          checked="true"
          onChange={(event) => console.log(event.target.checked)}
        />

        {/* SACAR EL ARCHIVO DEL TARGET>INPUT>FILES DEL EVENTO event.target.input.files??? <input type="file" onChange={(event) => console.log(event)} /> */}
        <Button type="submit" variant="primary" disabled={!email || !password}>
          Enter
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
