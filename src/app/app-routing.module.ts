import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicNgsRevealComponent } from './pages/basic-ngs-reveal/basic-ngs-reveal.component';
import { SequencerComponent } from './pages/sequencer/sequencer.component';
import { BasicNgsRevealsetComponent } from './pages/basic-ngs-revealset/basic-ngs-revealset.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basic-ngs-reveal', component: BasicNgsRevealComponent },
  { path: 'sequencer', component: SequencerComponent },
  { path: 'basic-ngs-revealset', component: BasicNgsRevealsetComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
