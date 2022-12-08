 import { ValidatorFn, FormGroup} from "@angular/forms";

 export function emailValidation(domains: String[]): ValidatorFn {

 const stringDomain = domains.join('|');
 const reGex = new RegExp(`^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
    [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$\.(${stringDomain})`);
    return (con) => {
       return(con.value === '' || reGex.test(con.value)) ? null : { emailValidation: true }
    };
 }

 export function sameValueEmails(em1: string, em2: string): ValidatorFn {
    return (control) => {
      const group = control as FormGroup;
      const ctrl1 = group.get(em1);
      const ctrl2 = group.get(em2)
      return ctrl1?.value === ctrl2?.value ? null : { sameValueEmails: true };
    };
  }