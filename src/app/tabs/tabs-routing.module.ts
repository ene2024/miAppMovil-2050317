import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { loginGuard } from '../login.guard';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'notes',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
        canActivate: [loginGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule),
        canActivate: [loginGuard]
      },
      {
        path: '',
        redirectTo: '/notes',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
