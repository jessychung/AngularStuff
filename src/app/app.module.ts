import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CatDetailComponent} from "./cat-detail.component";
import {CatService} from "./cat.service";

@NgModule({
  declarations: [
    AppComponent,
    CatDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
