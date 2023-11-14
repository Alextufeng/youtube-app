import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { DetailedItemComponent } from './youtube/pages/detailed-item/detailed-item.component';
import { LoginGuard } from './auth/guards/login.guard';
import { AdminPageComponent } from './youtube/pages/admin-page/admin-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'admin', component: AdminPageComponent },
  {
    path: '',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    pathMatch: 'full',
    canActivate: [LoginGuard],
  },
  { path: 'result/:id', component: DetailedItemComponent },
  {
    path: 'not-found',
    component: NotFoundComponent,
    canActivate: [LoginGuard],
  },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
