import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiaArticlesComponent } from './india-articles/india-articles.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent},
   { path: 'India', component: IndiaArticlesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
