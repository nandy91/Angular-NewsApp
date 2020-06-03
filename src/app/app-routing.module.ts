import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechArticlesComponent } from './tech-articles/tech-articles.component';

const routes: Routes = [
  { path: 'technology', component: TechArticlesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
