import { Fragment, JSX } from "react";

export function breakPhrase(
  str: string | undefined,
): JSX.Element[] | undefined {
  if (str === undefined) {
    return;
  }
  return str.split(" ").map((el) => (
    <Fragment key={el}>
      {el} {el.length > 4 && <br />}
    </Fragment>
  ));
}
