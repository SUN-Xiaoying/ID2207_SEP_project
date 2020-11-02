import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PMComponent } from './pm.component';
import { EventListComponent } from 'src/app/form/event-list/event-list.component';
import { AssignmentsComponent } from 'src/app/form/assignments/assignments.component';

export const routes:Routes = [
  { 
    path:'pm', 
    component: PMComponent,
    children: [
      { path:'', redirectTo:'pm', pathMatch:'full' },
      { path:'event-list', component: EventListComponent},
      { path:'assignments', component: AssignmentsComponent}
    ]
  }
];

@NgModule({
  declarations: [
    PMComponent,
    EventListComponent,
    AssignmentsComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PMModule { }