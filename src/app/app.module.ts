import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KingsComponent } from './kings/kings.component';
import { KingDetailComponent } from './king-detail/king-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    KingsComponent,
    KingDetailComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
