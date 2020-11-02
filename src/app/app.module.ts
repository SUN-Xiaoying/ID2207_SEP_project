import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms'

import { 
  RouterModule, 
  Routes,
  ActivatedRoute
} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';

/*-----------Form----------*/
import { EventRequestComponent } from './form/event-request/event-request.component';
import { EventListComponent } from './form/event-list/event-list.component';
import { AssignmentsComponent } from './form/assignments/assignments.component';
import { RecruitmentComponent } from './form/recruitment/recruitment.component';
import { FinancialComponent } from './form/financial/financial.component';

/*-----------Actor----------*/
import { SCSComponent } from './actor/scs/scs.component';
import { PMComponent } from './actor/pm/pm.component';
import { FMComponent } from './actor/fm/fm.component';
import { AMComponent } from './actor/am/am.component';

import { AUTH_PROVIDERS } from './services/auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { from } from 'rxjs';



export const routes: Routes = [

  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'**', component: LoginComponent},

  //authentication
  {path:'login', component: LoginComponent},
  {
    path:'protected',
    component:ProtectedComponent,
    canActivate : [LoggedInGuard]
  },

  //nested
  { 
    path:'pm', 
    component: PMComponent,
    children: [
      { path:'', redirectTo:'pm', pathMatch:'full' },
      { path:'event-list', component: EventListComponent},
      { path:'assignments', component: AssignmentsComponent}
    ] 
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProtectedComponent,
    EventRequestComponent,
    PMComponent,
    FMComponent,
    SCSComponent,
    AMComponent,
    EventListComponent,
    AssignmentsComponent,
    RecruitmentComponent,
    FinancialComponent
  ],
  imports: [
    AppRoutingModule ,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: LocationStrategy, useClass:HashLocationStrategy},
    {provide: APP_BASE_HREF, useValue:'/'},
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

