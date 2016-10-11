import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './inmemory.service';


import { AppComponent } from './app.component';
import {CatDetailComponent} from "./cat-detail.component";
import {CatService} from "./cat.service";
import {CatComponent} from "./cat.component";
import {DashboardComponent} from "./dashboard.component";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CatDetailComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
