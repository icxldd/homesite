import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from '../../services/RouteGuard.service';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
  {
    path: 'page1',
    canActivate:[RouteGuardService],
    component: Page1Component
},
{ path: '', pathMatch: 'full', redirectTo: 'page1' },
];

export const PageRoutes = RouterModule.forChild(routes);
