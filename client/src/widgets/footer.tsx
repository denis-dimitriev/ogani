import Logo from "@shared/ui/logo.tsx";
import { Link } from "react-router-dom";
import { FacebookIco, InstagramIco, LinkedinIco } from "@app/assets/icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="w-full bg-[--light]">
        <div className="container flex justify-between gap-[24px] py-3">
          <div className="col-md">
            <Logo />
          </div>
          <div className="col-md p-[20px]">
            <h5 className="font-bold mb-5">ogani.md</h5>
            <ul className="flex items-start flex-col gap-y-2">
              <li>
                <Link to="#">Achitare și livrare </Link>
              </li>
              <li>
                <Link to="#">Intrebari si raspunsuri</Link>
              </li>
              <li>
                <Link to="#">Termeni și condiții de utilizare </Link>
              </li>
              <li>
                <Link to="#">Politica de confidentialitate </Link>
              </li>
              <li>
                <Link to="#">Achitare și livrare </Link>
              </li>
              <li>
                <Link to="#">Achitare și livrare </Link>
              </li>
            </ul>
          </div>
          <div className="col-md p-[20px]">
            <h5 className="font-bold mb-5">Contacte</h5>
            <ul className="flex items-start flex-col gap-y-2 mb-3">
              <li>(022) 231-231</li>
              <li>hello@colorlib.com</li>
              <li><h5 className="font-bold">Adresa</h5></li>
              <li>mun.Chisinau, bd.Where no respect war</li>
            </ul>
            <ul className="flex gap-x-5 justify-start">
              <li>
                <Link to="">
                  <FacebookIco className="w-[35px] h-[35px]" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <InstagramIco className="w-[35px] h-[35px]" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <LinkedinIco className="w-[35px] h-[35px]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-[--red]">
        <div className="container py-4 text-white">
          <p>Copyright © 2021 Safira . All Rights Reserved.Design By Safira</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
