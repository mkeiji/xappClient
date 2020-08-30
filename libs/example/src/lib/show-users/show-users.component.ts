import { Component, OnInit, Input } from "@angular/core";
import { User } from "@client/interfaces";
import { FormGroup } from "@angular/forms";
import { isEmpty } from "lodash";
import { ExampleViewModelService } from "../example-view-model.service";
import { ExampleApiService } from "@client/api-service";
import { take } from "rxjs/operators";

@Component({
    selector: "client-show-users",
    templateUrl: "./show-users.component.html",
    styleUrls: ["./show-users.component.scss"],
    providers: [ExampleViewModelService]
})
export class ShowUsersComponent implements OnInit {
    @Input() parentFormBranch: FormGroup = new FormGroup({});

    dataSource: User[];
    showAddComponent: boolean = false;
    displayedColumns: string[] = [
        "id",
        "userName",
        "firstName",
        "lastName",
        "actions"
    ];

    constructor(
        readonly viewModelService: ExampleViewModelService,
        readonly apiService: ExampleApiService
    ) {
        // empty
    }

    ngOnInit(): void {
        this.loadData();
    }

    onEditUser(id: number): void {
        this.showAddComponent = !this.showAddComponent;

        if (isEmpty(this.parentFormBranch.controls)) {
            this.viewModelService.addUserFormControls(this.parentFormBranch);
        }

        const selectedUser = this.dataSource.find((user) => user.id === id);
        this.viewModelService.setValuesOnUserFormControl(
            this.parentFormBranch,
            selectedUser
        );
    }

    onDeleteUser(id: number): void {
        this.apiService
            .deleteUser(id)
            .pipe(take(1))
            .subscribe(() => this.loadData());
    }

    onActionDone(reload: boolean): void {
        if (reload) {
            this.showAddComponent = false;
            this.loadData();
        }
    }

    private loadData(): void {
        this.apiService
            .getAllUsers()
            .pipe(take(1))
            .subscribe((users: User[]) => (this.dataSource = users));
    }
}
