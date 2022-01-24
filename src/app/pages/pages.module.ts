import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BrowserModule } from '@angular/platform-browser'
import {
  FormsModule
} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
