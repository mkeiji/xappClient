import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: "helloComponent",
    templateUrl: "./hello.component.html",
    styleUrls: ["./hello.component.scss"]
})
export class HelloComponent implements OnInit {
    readonly BUTTON_NEW_USER = "New User";
    readonly BUTTON_CHECK_DB = "Check DB";

    viewButtonText: string;
    checkDBFlag = false;
    userFormGroup = new FormGroup({});

    constructor() {
        // empty
    }

    ngOnInit(): void {
        this.viewButtonText = this.BUTTON_CHECK_DB;
    }

    onViewButtonClick(): void {
        this.checkDBFlag = !this.checkDBFlag;
        this.viewButtonText = this.checkDBFlag
            ? this.BUTTON_NEW_USER
            : this.BUTTON_CHECK_DB;
        this.resetForm();
    }

    private resetForm(): void {
        this.userFormGroup = new FormGroup({});
    }
}
