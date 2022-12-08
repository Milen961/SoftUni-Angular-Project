 import { ValidatorFn } from "@angular/forms";

 export function emailValidation(domains: String[]): ValidatorFn {

 const stringDomain = domains.join('|');
 const reGex = new RegExp(`^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
    [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$\.(${stringDomain})`);
    return (con) => {
       return(con.value === '' || reGex.test(con.value)) ? null : { emailValidation: true }
    };
 }