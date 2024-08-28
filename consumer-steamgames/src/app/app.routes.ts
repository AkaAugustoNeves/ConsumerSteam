import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';

export const routes: Routes = [
    {path: '', redirectTo: '/steam', pathMatch: 'full'},
    {
        path: '',
        component: BaseLayoutComponent,
        children: [
            {
                path: 'steam',
                loadChildren: () => import('./steam/steam.module').then((m) => m.SteamModule)
            }
        ]
    }
];
