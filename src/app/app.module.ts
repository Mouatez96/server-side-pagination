import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import {EditDialogComponent} from "./components/edit-dialog/edit-dialog.component";


@NgModule({
  declarations: [
    AppComponent,
    DeleteDialogComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
