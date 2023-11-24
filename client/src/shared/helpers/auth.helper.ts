export function emailValidate(email: string): boolean {
  const regexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(email);
}

export function phoneValidate(phoneNumber: string): boolean {
  const regexp = /^(\d?[0][6-7][0-9]{1}\s?-?[0-9]{3}\s?-?[0-9]{3})$/;
  return regexp.test(phoneNumber);
}

export function passwordValidate(password: string): boolean {
  const regexp = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/;
  return regexp.test(password);
}
