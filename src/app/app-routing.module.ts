import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicNgsRevealComponent } from './pages/basic-ngs-reveal/basic-ngs-reveal.component';
import { SequencerComponent } from './pages/sequencer/sequencer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basic-ngs-reveal', component: BasicNgsRevealComponent },
  { path: 'sequencer', component: SequencerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
