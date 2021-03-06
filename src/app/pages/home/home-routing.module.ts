import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { InternalComponent } from './internal/internal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'noticias/:slug', component: InternalComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
