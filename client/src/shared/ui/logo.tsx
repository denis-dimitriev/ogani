import logo from "@app/assets/img/logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="" />
    </Link>
  );
}

export default Logo;
