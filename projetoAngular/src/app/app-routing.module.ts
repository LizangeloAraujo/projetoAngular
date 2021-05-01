  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router'
  import { CalcComponent } from './calc/calc.component';
  import { ContactPageComponent } from './contact-page/contact-page.component';
  import { FormPageComponent } from './form-page/form-page.component';
  import { HomeComponent } from './home/home.component';

  const router: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'form', component: FormPageComponent},
    {path: 'calc', component: CalcComponent },
  ];
  @NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(router)]
  })

  export class AppRoutingModule { }
