import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import {Routes, RouterModule} from '@angular/router'
import { NavbarComponent } from '../navbar/navbar.component';
import { PlaylistCardComponent } from '../playlist-card/playlist-card.component';




const routes: Routes = 
[
  {path : 'track/:searchString',component:CardComponent},
  {path: 'playlist',component:PlaylistCardComponent}
]
@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
   
    
  
})
export class AppRoutingModule 
{
 
 }
