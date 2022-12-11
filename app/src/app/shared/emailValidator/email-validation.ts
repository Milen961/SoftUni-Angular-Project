import { ValidatorFn } from "@angular/forms";
 
export function emailValidation(): ValidatorFn {
  const re = new RegExp(/^[\w.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,})+$/);
  return (con) => {
    return (con.value === '' || re.test(con.value)) ? null : { emailValidation: true };
  };
}