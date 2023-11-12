import logo from "@app/assets/img/logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}

export default Logo;
