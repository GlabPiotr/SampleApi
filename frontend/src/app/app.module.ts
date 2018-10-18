import '../polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AccountsService} from './services/accounts.service';


@NgModule({
  exports: [
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  entryComponents: [AppComponent],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
