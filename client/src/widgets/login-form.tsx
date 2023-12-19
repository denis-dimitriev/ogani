import { ChangeEvent, FormEvent, useContext, useState } from "react";
import InputForm from "@shared/ui/input-form.tsx";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "@context/auth.context.ts";
import { LanguageContext } from "@context/language.context.tsx";
import SignInStore from "@app/store/signin.store.ts";
import SubmitButton from "@shared/ui/submit-button.tsx";
import { observer } from "mobx-react-lite";
import Alert from "@shared/ui/alert.tsx";
import UserStore from "@app/store/user.store.ts";
import AlertStore from "@app/store/alert.store.ts";
import { LINKS } from "@shared/types/enums/links.ts";

const LoginForm = observer(() => {
  const { t } = useContext(LanguageContext);
  const { userWantRegister } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clearFields, setClearFields] = useState(false);

  const navigate = useNavigate()

  function onEmailHandler(e: ChangeEvent<HTMLInputElement>) {
    SignInStore.onEmailInput(e.target.value);
  }

  function onPasswordHandler(e: ChangeEvent<HTMLInputElement>) {
    SignInStore.onPasswordInput(e.target.value);
  }

  function onCloseAlertHandler() {
    if (error) {
      setError("");
      window.location.reload();
    }
    success && setSuccess("");
    AlertStore.setClose();
  }

  async function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    await SignInStore.onSubmit()
      .then((res) => {
        if (res?.data) {
          setSuccess(res.data.message);
          UserStore.setUser(res.data.user);
          UserStore.saveUserToLS();
        }
      })
      .catch((err) => {
        if (err) {
          setError(err.response?.data.message);
          return err.response;
        }
      })
      .finally(() => {
        SignInStore.resetAll();
        setClearFields(true);
        setLoading(false);
      });

    if (UserStore.getUser().role === "customer") {
      setTimeout(() => {
        navigate(LINKS.HOME)
      }, 1000)
    }
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
        error={SignInStore.email.error}
        success={SignInStore.email.success}
        message={t?.auth.messages[SignInStore.email.message as never]}
        disabled={loading}
        clear={clearFields}
        placeholder="example@mail.com"
        onInput={onEmailHandler}
      />

      <InputForm
        id="password"
        type="password"
        label={t?.auth.password.concat(" *")}
        error={SignInStore.password.error}
        success={SignInStore.password.success}
        message={t?.auth.messages[SignInStore.password.message as never]}
        disabled={loading}
        clear={clearFields}
        placeholder={t?.auth.password}
        onInput={onPasswordHandler}
      />

      <p className="mb-2 text-[14px] transition hover:text-[--blue]">
        <Link to="">{t?.auth["forgot the password"].concat("?")}</Link>
      </p>

      <SubmitButton
        loading={loading}
        disabled={!SignInStore.email.success || !SignInStore.password.success}
      >
        {loading ? t?.auth.processing : t?.auth.login}
      </SubmitButton>

      <button
        type="button"
        className="mt-2 text-center text-[14px] transition hover:text-[--blue]"
        onClick={userWantRegister}
      >
        {t?.auth["don't have an account"].concat("?")}
      </button>

      <div
        className={`${
          AlertStore.open && "hidden"
        } top-o absolute left-0 right-0`}
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
            message={t?.auth.messages["login successful"] as string}
            onClick={onCloseAlertHandler}
          />
        )}
      </div>
    </form>
  );
});

export default LoginForm;
