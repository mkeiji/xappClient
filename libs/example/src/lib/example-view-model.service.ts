import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
    USERID_CONTROL_NAME,
    USERNAME_CONTROL_NAME,
    FIRSTNAME_CONTROL_NAME,
    LASTNAME_CONTROL_NAME
} from "./example-view-model";
import { User } from "@client/interfaces";

export class ExampleViewModelService {
    addUserFormControls(parentFormGroup: FormGroup): void {
        const userIdControl = new FormControl("");
        parentFormGroup.addControl(USERID_CONTROL_NAME, userIdControl);

        const userNameControl = new FormControl("", [Validators.required]);
        parentFormGroup.addControl(USERNAME_CONTROL_NAME, userNameControl);

        const firstNameControl = new FormControl("", [Validators.required]);
        parentFormGroup.addControl(FIRSTNAME_CONTROL_NAME, firstNameControl);

        const lastNameControl = new FormControl("", [Validators.required]);
        parentFormGroup.addControl(LASTNAME_CONTROL_NAME, lastNameControl);
    }

    setValuesOnUserFormControl(parentFormGroup: FormGroup, user: User): void {
        parentFormGroup.controls[USERID_CONTROL_NAME].setValue(user.id);
        parentFormGroup.controls[USERNAME_CONTROL_NAME].setValue(user.userName);
        parentFormGroup.controls[FIRSTNAME_CONTROL_NAME].setValue(
            user.firstName
        );
        parentFormGroup.controls[LASTNAME_CONTROL_NAME].setValue(user.lastName);
    }
}
