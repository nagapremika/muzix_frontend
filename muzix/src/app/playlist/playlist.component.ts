import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {TrackService} from '../track.service'
import { Track } from 'modals/Track';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
public  tracks:Track[]
  constructor(private trackService:TrackService, private route:Router) { }

    ngOnInit() {
    }
    public display(){ 
    
    
      this.trackService.getSavedTracks().subscribe((data)=>{
        this.tracks=data;
        console.log(this.tracks);
        this.route.navigateByUrl("playlist");

      });
    }
    
  }


