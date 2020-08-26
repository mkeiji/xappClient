import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConstantsModule } from '@client/constants';
import { AppComponent } from './app.component';
import { ExampleModule } from '@client/example';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ConstantsModule,
        ExampleModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
