import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardpanelComponent } from './index/cardpanel/cardpanel.component';
import { HeaderComponent } from './index/header/header.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllowancecardComponent } from './index/cardpanel/allowancecard/allowancecard.component';
import { DeductioncardComponent } from './index/cardpanel/deductioncard/deductioncard.component';
import { EmployeecardComponent } from './index/cardpanel/employeecard/employeecard.component';
import { PayrollcardComponent } from './index/cardpanel/payrollcard/payrollcard.component';
import { UserscardComponent } from './index/cardpanel/userscard/userscard.component';


const routes: Routes = [
  { path: '', component: IndexComponent, 
    children:[
      {path: '', component: CardpanelComponent},
      {path: '', component: NavbarComponent},
      {path: '', component: HeaderComponent}
    ] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'member', component: IndexComponent,
  children:[

    {path: '', component: EmployeecardComponent}
  ]},

  { path: 'home', component: IndexComponent,
  children:[
    {path: '', component: CardpanelComponent}
  ]},

  { path: 'payroll', component: IndexComponent,
  children:[
    {path: '', component: PayrollcardComponent}
  ]},

  { path: 'allowance', component: IndexComponent,
  children:[
    {path: '', component: AllowancecardComponent}
  ]},

  { path: 'deduction', component: IndexComponent,
  children:[
    {path: '', component: DeductioncardComponent}
  ]},

  { path: 'users', component: IndexComponent,
  children:[
    {path: '', component: UserscardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
