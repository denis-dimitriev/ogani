import InputForm from "@shared/ui/input-form.tsx";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "@context/auth.context.ts";

interface FormFields {
  email: string;
  phone: string;
  password: string;
  confirmedPassword: string;
}

const initial: FormFields = {
  email: "",
  phone: "",
  password: "",
  confirmedPassword: "",
};

function SignupForm() {
  const [formFields, setFormFields] = useState<FormFields>(initial);
  const { userWantLogin } = useContext(AuthContext);

  function onRegisterHandler(e: ChangeEvent<HTMLInputElement>) {
    setFormFields({ ...formFields, [e.target.id]: e.target.value });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const user = {
      email: formFields.email,
    };
  }

  return (
    <form className="flex flex-col gap-y-[20px] p-2.5" onSubmit={onSubmit}>
      <InputForm
        id="email"
        label="Email *"
        value={formFields.email}
        placeholder="example@mail.com"
        onInput={onRegisterHandler}
      />

      <InputForm
        id="phone"
        label="Phone number *"
        value={formFields.phone}
        placeholder={"(069) 123 456"}
        onInput={onRegisterHandler}
      />

      <InputForm
        id="password"
        type="password"
        label="Password *"
        value={formFields.password}
        placeholder={"Password"}
        onInput={onRegisterHandler}
      />

      <InputForm
        id="password-confirm"
        type="password"
        label="Confirm password *"
        value={formFields.confirmedPassword}
        placeholder={"Confirm password"}
        onInput={onRegisterHandler}
      />

      <div className="mb-2 flex gap-x-2 text-[14px] transition hover:text-[--blue]">
        <input id="checkbox" type="checkbox" />
        <label htmlFor="checkbox">Remember me</label>
      </div>

      <button
        type="submit"
        className="rounded bg-[--red] py-2 text-[--white] transition hover:bg-[--red-dark]"
      >
        Register
      </button>

      <button
        type="button"
        className="mt-2 text-center text-[14px] transition hover:text-[--blue]"
        onClick={userWantLogin}
      >
        Already have an account?
      </button>
    </form>
  );
}

export default SignupForm;
