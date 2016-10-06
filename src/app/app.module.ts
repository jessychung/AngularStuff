import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import {CatDetailComponent} from "./cat-detail.component";
import {CatService} from "./cat.service";
import {CatComponent} from "./cat.component";


@NgModule({
  declarations: [
    AppComponent,
    CatDetailComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
