import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule} from '../material.module';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { CardComponent } from './card/card.component';
import { PlaylistCardComponent,ComponentDialogue } from './playlist-card/playlist-card.component';
import {FlexLayoutModule} from '@angular/flex-layout'
import {TrackService} from './track.service';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
 import { AppRoutingModule } from './app-routing/app-routing.module';
import { FooterComponent } from './footer/footer.component';

 import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchboxComponent,
    PlaylistComponent,
    CardComponent,
    PlaylistCardComponent,
    FooterComponent,
    ComponentDialogue
  
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatDialogModule
   
    
  ],
  entryComponents:[PlaylistCardComponent,ComponentDialogue],
  providers: [TrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
