import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { BrowserModule } from '@angular/platform-browser'
@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    // BrowserModule,
    MainLayoutRoutingModule,
    CommonComponentsModule
  ]
})
export class MainLayoutModule { }
