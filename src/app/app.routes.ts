import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'campaigns',
    pathMatch: 'full'
  },
  {
    path: 'campaigns',
    loadComponent: () =>
      import('./components/campaign/campaign-list/campaign-list.component').then(m => m.CampaignListComponent),
  },
  {
    path: 'campaign/:id',
    loadComponent: () =>
      import('./components/campaign/campaign-detail/campaign-detail.component').then(m => m.CampaignDetailComponent),
  },

  {
    path: '**',
    redirectTo: 'campaigns',
    pathMatch: 'full'
  }
];
