import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleModule } from '@client/example';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ExampleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
