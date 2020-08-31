import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RouteGuardService } from './services/RouteGuard.service';


const routes: Routes = [
  {
    path: 'page',
    loadChildren: () => import('./components/page/page.module').then(m => m.PageModule)
},
  {
      path: 'home',
      canActivate:[RouteGuardService],
      component: HomeComponent
  },
  {
      path: 'login',
      // canActivate:[RouteGuardService],
      component: LoginComponent
  },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

export const BasicRoutes = RouterModule.forChild(routes);
