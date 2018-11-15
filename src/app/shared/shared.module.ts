import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { HeaderComponent } from './components';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    HeaderComponent
  ]
})
export class SharedModule {}
