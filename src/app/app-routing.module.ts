import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicNgsRevealComponent } from './pages/basic-ngs-reveal/basic-ngs-reveal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basic-ngs-reveal', component: BasicNgsRevealComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
