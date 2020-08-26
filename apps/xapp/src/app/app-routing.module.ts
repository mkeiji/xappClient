import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleModule } from '@client/example';
import {HelloComponent} from 'libs/example/src/lib/hello/hello.component';

const routes: Routes = [
    { path: 'hello', component: HelloComponent }
];

@NgModule({
  declarations: [],
  imports: [
    ExampleModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
