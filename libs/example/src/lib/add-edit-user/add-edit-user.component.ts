import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
    FormGroup,
    FormControl,
    Validators,
    AbstractControl
} from "@angular/forms";
import {
    USERNAME_CONTROL_NAME,
    FIRSTNAME_CONTROL_NAME,
    LASTNAME_CONTROL_NAME,
    USERID_CONTROL_NAME
} from "../example-view-model";
import { ExampleViewModelService } from "../example-view-model.service";
import { ExampleApiService } from "@client/api-service";
import { User } from "@client/interfaces";
import { take } from "rxjs/operators";

@Component({
    selector: "client-add-edit-user",
    templateUrl: "./add-edit-user.component.html",
    styleUrls: ["./add-edit-user.component.scss"],
    providers: [ExampleViewModelService]
})
export class AddEditUserComponent implements OnInit {
    @Input() parentFormBranch: FormGroup = new FormGroup({});
    @Output() actionDone: EventEmitter<boolean> = new EventEmitter<boolean>();

    userIdControl: AbstractControl;
    userNameControl: AbstractControl;
    firstNameControl: AbstractControl;
    lastNameControl: AbstractControl;
    isUpdate = false;

    constructor(private readonly apiService: ExampleApiService) {}

    ngOnInit(): void {
        if (
            this.parentFormBranch.controls[USERID_CONTROL_NAME] &&
            this.parentFormBranch.controls[USERID_CONTROL_NAME].value
        ) {
            this.isUpdate = true;
            this.userIdControl = this.parentFormBranch.controls[
                USERID_CONTROL_NAME
            ];
            this.userNameControl = this.parentFormBranch.controls[
                USERNAME_CONTROL_NAME
            ];
            this.firstNameControl = this.parentFormBranch.controls[
                FIRSTNAME_CONTROL_NAME
            ];
            this.lastNameControl = this.parentFormBranch.controls[
                LASTNAME_CONTROL_NAME
            ];
        } else {
            this.addControls();
        }
    }

    onSaveClick() {
        if (this.parentFormBranch.status === "VALID") {
            const newUser = {
                id: this.userIdControl.value,
                userName: this.userNameControl.value,
                firstName: this.firstNameControl.value,
                lastName: this.lastNameControl.value
            };

            if (this.isUpdate) {
                this.apiService
                    .putUser(newUser)
                    .pipe(take(1))
                    .subscribe(() => this.actionDone.emit(true));
            } else {
                this.apiService
                    .postUser(newUser)
                    .pipe(take(1))
                    .subscribe(() => this.actionDone.emit(true));
            }
            this.reset();
        }
    }

    private addControls(): void {
        this.userIdControl = new FormControl("");
        this.parentFormBranch.addControl(
            USERID_CONTROL_NAME,
            this.userIdControl
        );

        this.userNameControl = new FormControl("", [Validators.required]);
        this.parentFormBranch.addControl(
            USERNAME_CONTROL_NAME,
            this.userNameControl
        );

        this.firstNameControl = new FormControl("", [Validators.required]);
        this.parentFormBranch.addControl(
            FIRSTNAME_CONTROL_NAME,
            this.firstNameControl
        );

        this.lastNameControl = new FormControl("", [Validators.required]);
        this.parentFormBranch.addControl(
            LASTNAME_CONTROL_NAME,
            this.lastNameControl
        );
    }

    private reset(): void {
        this.isUpdate = false;
        this.userIdControl.reset();
        this.userNameControl.reset();
        this.firstNameControl.reset();
        this.lastNameControl.reset();
    }
}
