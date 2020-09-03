import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "profile"},
  {path: "profile", component: ProfileComponent},
  {path: "portfolio", component: PortfolioComponent},
  {path: "services", component: ServicesComponent},
  // TODO (deojonathan@): Create a 404 page, re-reroute to home page for now.
  {path: "**", redirectTo: "profile"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
