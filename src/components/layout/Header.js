import { useContext } from "react";
import classNames from "classnames";
import Button from "../common/Button";
import { ReactComponent as Icon } from "../../assets/nodepop.svg";
import { logout } from "../auth/LoginPage/service";
import AuthContext from "../auth/context";

function Header({ className }) {
  const { isLogged, handleLogout } = useContext(AuthContext);
  return (
    <header className={classNames("header", className)}>
      <div className="header-logo">
        <Icon width="32" height="32" />
      </div>
      <nav className="header-nav">
        {isLogged ? (
          <Button className="header-button" onClick={handleLogout}>
            Log out
          </Button>
        ) : (
          <Button variant="primary" className="header-button">
            Log in
          </Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
