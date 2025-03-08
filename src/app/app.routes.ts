import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadChildren:() => import('./portfolio/portfolio-routing.module').then(m=>m.PortfolioRoutingModule)},
    {path:'', redirectTo:'portfolio', pathMatch:'full'}
];
