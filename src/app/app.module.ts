import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './components/code/code.component';
import { LanguageComponent } from './components/language/language.component';
import { PlaceComponent } from './components/place/place.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    LanguageComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
