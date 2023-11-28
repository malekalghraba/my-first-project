import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirstRoutingModule } from './first-routing.module';

import { FirstComponent } from './first.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    FirstComponent
  ],
  imports: [
    BrowserModule,
    FirstRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FirstComponent]
})
export class FirstModule { }
