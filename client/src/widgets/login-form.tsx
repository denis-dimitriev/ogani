import { ChangeEvent, FormEvent, useContext, useState } from "react";
import InputForm from "@shared/ui/input-form.tsx";
import { Link } from "react-router-dom";
import { AuthContext } from "@context/auth.context.ts";
import { LoginData } from "@shared/types/auth.types.ts";
import ApiService from "@app/service/api.service.ts";

const initial: LoginData = {
  email: "",
  password: "",
};

function LoginForm() {
  const [formFields, setFormFields] = useState(initial);

  const { userWantRegister } = useContext(AuthContext);

  function onLoginHandler(e: ChangeEvent<HTMLInputElement>) {
    setFormFields({ ...formFields, [e.target.id]: e.target.value });
  }

  async function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const userFields = {
      email: formFields.email,
      password: formFields.password,
    };

    const data = await ApiService.loginUser(userFields);

    console.log(data);
  }

  return (
    <form
      className="flex flex-col gap-y-[20px] p-2.5"
      onSubmit={onSubmitHandler}
    >
      <InputForm
        id="email"
        label="Email *"
        value={formFields.email}
        placeholder={"Email"}
        onInput={onLoginHandler}
      />
      <InputForm
        id="password"
        type="password"
        label="Password *"
        value={formFields.password}
        placeholder={"Password"}
        onInput={onLoginHandler}
      />

      <p className="mb-2 text-[14px] transition hover:text-[--blue]">
        <Link to="">Forgot the password?</Link>
      </p>

      <button
        type="submit"
        className="rounded bg-[--red] py-2 text-[--white] transition hover:bg-[--red-dark]"
      >
        Login
      </button>

      <button
        type="button"
        className="mt-2 text-center text-[14px] transition hover:text-[--blue]"
        onClick={userWantRegister}
      >
        Dont register?
      </button>
    </form>
  );
}

export default LoginForm;
