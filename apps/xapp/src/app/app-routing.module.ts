import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExampleModule } from '@client/example';
import { ConstantsModule } from '@client/constants';
import { APP_ROUTES } from 'libs/constants/src/lib/routes/routes';

@NgModule({
    declarations: [],
    imports: [ExampleModule, ConstantsModule, RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
