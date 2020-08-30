import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ExampleApiService } from "./services/example-api.service";

@NgModule({
    imports: [CommonModule, BrowserModule, HttpClientModule],
    providers: [ExampleApiService]
})
export class ApiServiceModule {}
