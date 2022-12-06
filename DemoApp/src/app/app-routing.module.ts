import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RformComponent } from './rform/rform.component';
import { UserPorfileComponent } from './user-porfile/user-porfile.component';

const routes: Routes = [
  {
    path: 'form',
    component: RformComponent
  },
  {
    path: 'userprofile',
    component: UserPorfileComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
