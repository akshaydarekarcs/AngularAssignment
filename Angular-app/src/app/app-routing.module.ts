import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reports-dashboard', component: HomeComponent },
  { path: 'functional-dashboard', component: HomeComponent },
  { path: 'Performance-dashboard', component: HomeComponent },
  { path: 'process-dashboard', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
