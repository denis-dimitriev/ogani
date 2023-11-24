import InputForm from "@shared/ui/input-form.tsx";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "@context/auth.context.ts";
import SignupStore from "@app/store/signup.store.ts";
import { observer } from "mobx-react-lite";
import { LanguageContext } from "@context/language.context.tsx";
import SubmitButton from "@shared/ui/submit-button.tsx";
import Alert from "@shared/ui/alert.tsx";

const SignupForm = observer(function () {
  const { userWantLogin } = useContext(AuthContext);
  const { t } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clearFields, setClearFields] = useState(false);
  const [closeAlert, setCloseAlert] = useState(false);

  function onEmailHandler(e: ChangeEvent<HTMLInputElement>) {
    SignupStore.onEmailInput(e.target.value);
  }

  function onPhoneHandler(e: ChangeEvent<HTMLInputElement>) {
    SignupStore.onPhoneNumberInput(e.target.value);
  }
  function onPasswordHandler(e: ChangeEvent<HTMLInputElement>) {
    SignupStore.onPasswordInput(e.target.value);
  }
  function onConfirmPasswordHandler(e: ChangeEvent<HTMLInputElement>) {
    SignupStore.onConfirmPasswordInput(e.target.value);
  }

  function onCloseAlertHandler() {
    setCloseAlert(true);
    if (error) {
      setError("");
      window.location.reload();
    }
    success && setSuccess("");
  }

  async function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const response = await SignupStore.onSubmit()
      .then((res) => {
        if (res?.status === 201) {
          setSuccess(res.data.message);
        }
        return res;
      })
      .catch((err) => {
        if (err) {
          setError(err.response?.data.message);
          return err.response;
        }
      })
      .finally(() => {
        SignupStore.resetAll();
        setClearFields(true);
        setLoading(false);
      });

    console.log(response);
  }

  return (
    <form
      className="flex flex-col gap-y-[20px] p-2.5"
      onSubmit={onSubmitHandler}
    >
      <InputForm
        id="email"
        label={t?.auth.email.concat(" *")}
        autoFocus
        error={SignupStore.email.error}
        success={SignupStore.email.success}
        message={t?.auth.messages[SignupStore.email.message as never]}
        disabled={loading}
        clear={clearFields}
        placeholder="example@mail.com"
        onInput={onEmailHandler}
      />

      <InputForm
        id="phone"
        label={t?.auth.phone_number.concat(" *")}
        error={SignupStore.phoneNumber.error}
        success={SignupStore.phoneNumber.success}
        message={t?.auth.messages[SignupStore.phoneNumber.message as never]}
        disabled={loading}
        clear={clearFields}
        placeholder={"069 123 456"}
        onInput={onPhoneHandler}
      />

      <InputForm
        id="password"
        type="password"
        label={t?.auth.password.concat(" *")}
        subLabel={`[${t?.auth.messages["min 1 letter & 1 digit"]}]`}
        error={SignupStore.password.error}
        success={SignupStore.password.success}
        message={t?.auth.messages[SignupStore.password.message as never]}
        disabled={loading}
        clear={clearFields}
        placeholder={t?.auth.messages["min length 6"]}
        onInput={onPasswordHandler}
      />

      <InputForm
        id="confirmPassword"
        type="password"
        label={t?.auth.confirm_password.concat(" *")}
        error={SignupStore.confirmPassword.error}
        success={SignupStore.confirmPassword.success}
        message={t?.auth.messages[SignupStore.confirmPassword.message as never]}
        disabled={loading}
        clear={clearFields}
        placeholder={t?.auth.confirm_password}
        onInput={onConfirmPasswordHandler}
      />

      <div className="mb-2 flex gap-x-2 text-[14px] transition hover:text-[--blue]">
        <input id="checkbox" type="checkbox" disabled={loading} />
        <label htmlFor="checkbox">{t?.auth.remember_me}</label>
      </div>

      <SubmitButton
        loading={loading}
        disabled={
          !SignupStore.email.success ||
          !SignupStore.phoneNumber.success ||
          !SignupStore.password.success ||
          !SignupStore.confirmPassword.success
        }
      >
        {loading ? t?.auth.processing : t?.auth.register}
      </SubmitButton>

      <button
        type="button"
        disabled={loading}
        className="text-center text-[14px] transition hover:text-[--blue]"
        onClick={userWantLogin}
      >
        {t?.auth["already have an account"].concat("?")}
      </button>

      <div
        className={`${
          closeAlert && "hidden"
        } absolute left-0 right-0 top-[40%]`}
      >
        {error && (
          <Alert
            type="danger"
            onClick={onCloseAlertHandler}
            message={
              t?.auth.messages["something went wrong, check the data"] as string
            }
          />
        )}
        {success && (
          <Alert
            type="success"
            message={
              t?.auth.messages["user has been created successfully"] as string
            }
            onClick={onCloseAlertHandler}
          />
        )}
      </div>
    </form>
  );
});

export default SignupForm;
