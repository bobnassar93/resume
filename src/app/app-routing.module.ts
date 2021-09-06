import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'portfolio-details',
    component: PortfolioDetailsComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
