import { FormGroup, ValidatorFn } from "@angular/forms";

export function sameValueGroup(em1: string, em2: string): ValidatorFn {
    return (control) => {
      const group = control as FormGroup;
      const ctrl1 = group.get(em1);
      const ctrl2 = group.get(em2)
      return ctrl1?.value === ctrl2?.value ? null : { sameValueGroup: true };
    };
  }