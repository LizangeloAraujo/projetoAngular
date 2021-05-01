  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppComponent } from './app.component';
  import { HeaderComponent } from './header/header.component';
  import { HomeComponent } from './home/home.component';
  import { ContactPageComponent } from './contact-page/contact-page.component';
  import { AppRoutingModule } from './app-routing.module';
  import { FormPageComponent } from './form-page/form-page.component';
  import { HttpClientModule } from '@angular/common/http';
  import { FormsModule } from '@angular/forms';
  import { CalcComponent } from './calc/calc.component';

  @NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      ContactPageComponent,
      FormPageComponent,
      CalcComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
