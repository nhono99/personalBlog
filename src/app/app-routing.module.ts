import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: HomeComponent },
  {
    path: 'post/:id/:slug',
    loadChildren: () => import('./post/post.module')
      .then(m => m.PostModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
