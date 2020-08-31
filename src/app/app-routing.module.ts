import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // {
    //     path: 'mirror',
    //     loadChildren: () => import('./mirror/mirror.module').then(m => m.MirrorModule)
    // },
    {
        path: 'basic',
        loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule)
    },
    { path: '', pathMatch: 'full', redirectTo: 'basic' },
    { path: '**', redirectTo: 'basic' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
