import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [CommonModule, MatButtonModule],
    declarations: [HelloComponent],
    exports: [HelloComponent]
})
export class ExampleModule {}
