import Logo from "@shared/ui/logo.tsx";

function Footer() {
  return (
    <footer className="footer">
      <div className="w-full bg-[--light]">
        <div className="container flex justify-between gap-[24px] py-3">
          <div className="col-md">
            <Logo />
          </div>
          <div className="col-md"></div>
          <div className="col-md"></div>
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
