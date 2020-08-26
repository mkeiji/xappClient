import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExampleModule } from '@client/example';
import { ConstantsModule, APP_ROUTES } from '@client/constants';

@NgModule({
    declarations: [],
    imports: [ExampleModule, ConstantsModule, RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
