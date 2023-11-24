import Backdrop from "@shared/ui/backdrop.tsx";
import { useContext } from "react";
import Logo from "@shared/ui/logo.tsx";
import { CloseIco } from "@app/assets/icons";
import { useNavigate } from "react-router-dom";
import LoginForm from "@widgets/login-form.tsx";
import SignupForm from "@widgets/signup-form.tsx";
import { AuthContext } from "@context/auth.context.ts";

function Auth() {
  const { hasAccount } = useContext(AuthContext);
  const navigate = useNavigate();

  function onCancelHandler() {
    navigate("/");
  }

  return (
    <Backdrop className="flex items-center justify-center ">
      <div
        className="relative flex w-[--min-width-container] animate-fadeInY flex-col
                  gap-y-[20px] rounded border border-[--light] bg-[--white] p-2 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button onClick={onCancelHandler}>
            <CloseIco />
          </button>
        </div>

        {hasAccount ? <LoginForm /> : <SignupForm />}
      </div>
    </Backdrop>
  );
}

export default Auth;
