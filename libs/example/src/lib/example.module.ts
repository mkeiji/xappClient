import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HelloComponent } from "./hello/hello.component";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { AddEditUserComponent } from "./add-edit-user/add-edit-user.component";
import { ShowUsersComponent } from "./show-users/show-users.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [HelloComponent, AddEditUserComponent, ShowUsersComponent],
    exports: [HelloComponent, AddEditUserComponent, ShowUsersComponent]
})
export class ExampleModule {}
