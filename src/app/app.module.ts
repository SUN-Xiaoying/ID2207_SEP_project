import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

import { 
  RouterModule, 
  Routes
} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { EventRequestComponent } from './event-request/event-request.component';
import { EventListComponent } from './event-list/event-list.component';
import { ProtectedComponent } from './protected/protected.component';
import { PMComponent } from './pm/pm.component';

import { AUTH_PROVIDERS } from './auth.sevice';
import { LoggedInGuard } from './logged-in.guard';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

export const routes: Routes = [

  //{path: ''. redirectTo:'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'pm', component:PMComponent},
  {path:'event-request', component:EventRequestComponent},
  {
    path:'protected',
    component:ProtectedComponent,
    canActivate : [LoggedInGuard]
  },

  //nested
  {
    path:'event-request',
    component:EventRequestComponent,
   // children: childRoutes
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    UserListComponent,
    EventRequestComponent,
    EventListComponent,
    ProtectedComponent,
    PMComponent
  ],
  imports: [
    AppRoutingModule ,
    BrowserModule,
    FormsModule,
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

