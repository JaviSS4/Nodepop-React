import { useContext } from "react";
import classNames from "classnames";
import Button from "../common/Button";
import { ReactComponent as Icon } from "../../assets/nodepop.svg";
import { logout } from "../auth/LoginPage/service";
import AuthContext from "../auth/context";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.css";

function Header({ className }) {
  const { isLogged, handleLogout } = useContext(AuthContext);
  return (
    <header className={classNames("header", className)}>
      <Link to="/">
        <div>INICIO</div>
        <div className="header-logo">
          <Icon width="40" height="40" />
        </div>
      </Link>
      <nav className="header-nav">
        <NavLink to="/adverts/new"> New Advert </NavLink>
        {isLogged ? (
          <Button className="header-button" onClick={handleLogout}>
            Log out
          </Button>
        ) : (
          <Button
            variant="primary"
            className="header-button"
            as={Link}
            to="/login"
          >
            Log in
          </Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
