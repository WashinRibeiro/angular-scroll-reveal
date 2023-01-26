import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgsRevealModule } from 'ngx-scrollreveal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BasicNgsRevealComponent } from './pages/basic-ngs-reveal/basic-ngs-reveal.component';
import { SequencerComponent } from './pages/sequencer/sequencer.component';
import { BasicNgsRevealsetComponent } from './pages/basic-ngs-revealset/basic-ngs-revealset.component';
import { ConfigNgsRevealsetComponent } from './pages/config-ngs-revealset/config-ngs-revealset.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicNgsRevealComponent,
    SequencerComponent,
    BasicNgsRevealsetComponent,
    ConfigNgsRevealsetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgsRevealModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
