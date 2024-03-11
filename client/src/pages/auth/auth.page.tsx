import { useContext } from "react";
import Logo from "@shared/ui/logo.tsx";
import { CloseIco } from "@app/assets/icons";
import { useNavigate } from "react-router-dom";
import LoginForm from "@widgets/login-form.tsx";
import SignupForm from "@widgets/signup-form.tsx";
import { AuthContext } from "@context/auth.context.ts";
import { LINKS } from "@shared/types/enums/links.ts";

function AuthPage() {
  const { hasAccount } = useContext(AuthContext);
  const navigate = useNavigate();

  function onCancelHandler() {
    setTimeout(() => navigate(LINKS.HOME), 100);
  }

  return (
    <div className="backdrop backdrop-blur">
      <div
        className="relative mx-auto mt-[20%] flex w-[--min-width-container] animate-fadeInY flex-col
                  gap-y-[20px] rounded border border-[--light] bg-[--white] p-2 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button className="group" onClick={onCancelHandler}>
            <CloseIco className=" transition group-hover:rotate-180" />
          </button>
        </div>

        {hasAccount ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}

export default AuthPage;
