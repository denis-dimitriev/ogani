import InputForm from "@shared/ui/input-form.tsx";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "@context/auth.context.ts";
import { isEmpty } from "@shared/helpers/common.helper.ts";
import { emailValidate } from "@shared/helpers/auth.helper.ts";

type FormFields = {
  value: string;
  error: boolean;
  success: boolean;
  message: string;
};

const initialEmail = {
  value: "",
  error: false,
  success: false,
  message: "",
};

const initialPhone = {
  value: "",
  error: false,
  success: false,
  message: "",
};

const initialPassword = {
  value: "",
  error: false,
  success: false,
  message: "",
};

const initialConfirmPassword = {
  value: "",
  error: false,
  success: false,
  message: "",
};

function SignupForm() {
  const { userWantLogin } = useContext(AuthContext);

  const [email, setEmail] = useState<FormFields>(initialEmail);
  const [phone, setPhone] = useState<FormFields>(initialPhone);
  const [password, setPassword] = useState<FormFields>(initialPassword);
  const [confirmPassword, setConfirmPassword] = useState<FormFields>(
    initialConfirmPassword,
  );

  function onEmailHandler(e: ChangeEvent<HTMLInputElement>) {
    setEmail({ ...email, value: e.target.value });
  }
  function onPhoneHandler(e: ChangeEvent<HTMLInputElement>) {
    setPhone({ ...phone, value: e.target.value });
  }
  function onPasswordHandler(e: ChangeEvent<HTMLInputElement>) {
    setPassword({ ...password, value: e.target.value });
  }
  function onConfirmPasswordHandler(e: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword({ ...confirmPassword, value: e.target.value });
  }

  async function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //     /^(()?\d?[0]{1}[6-7]{1}[0-9]{1}\s?\-?[0-9]{3}\s?\-?[0-9]{3})$/

    if (isEmpty(email.value)) {
      setEmail({ ...email, error: true, message: "field is empty" });
      return;
    } else if (!emailValidate(email.value)) {
      setEmail({ ...email, error: true, message: "Invalid email" });
      return;
    } else {
      setEmail({ ...email, error: false, message: "", success: true });
    }

    if (isEmpty(password.value)) {
      setPassword({ ...password, error: true, message: "field is empty" });
      return;
    } else if (password.value.length < 6) {
      setPassword({ ...password, error: true, message: "password too short" });
      return;
    } else {
      setPassword({ ...password, error: false, message: "" });
    }

    if (
      isEmpty(confirmPassword.value) ||
      confirmPassword.value !== password.value
    ) {
      setConfirmPassword({
        ...confirmPassword,
        error: true,
        message: "Password mismatch",
      });
      setPassword({ ...password, error: true, message: "Password mismatch" });
      return;
    } else {
      setPassword({ ...password, error: false, message: "", success: true });
      setConfirmPassword({
        ...confirmPassword,
        error: false,
        message: "",
        success: true,
      });
    }
  }

  return (
    <form
      className="flex flex-col gap-y-[20px] p-2.5"
      onSubmit={onSubmitHandler}
    >
      <InputForm
        id="email"
        label="Email *"
        value={email.value}
        error={email.error}
        success={email.success}
        message={email.message}
        placeholder="example@mail.com"
        onInput={onEmailHandler}
      />

      <InputForm
        id="phone"
        label="Phone number *"
        value={phone.value}
        error={phone.error}
        success={phone.success}
        message={phone.message}
        placeholder={"(069) 123 456"}
        onInput={onPhoneHandler}
      />

      <InputForm
        id="password"
        type="password"
        label="Password *"
        value={password.value}
        error={password.error}
        success={password.success}
        message={password.message}
        placeholder="min 6 simbols"
        onInput={onPasswordHandler}
      />

      <InputForm
        id="confirmPassword"
        type="password"
        label="Confirm password *"
        value={confirmPassword.value}
        error={confirmPassword.error}
        success={confirmPassword.success}
        message={confirmPassword.message}
        placeholder={"Confirm password"}
        onInput={onConfirmPasswordHandler}
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
