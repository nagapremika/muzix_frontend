import { Component, OnInit } from '@angular/core';
import {  ParamMap, ActivatedRoute } from '@angular/router';
import {TrackService} from '../track.service'
import { Track } from 'modals/Track';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  tracks:Track[]
  track:Track
  constructor(private trackService:TrackService, private route:ActivatedRoute) { }

  
    ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) =>
      {
        let searchString = params.get('searchString');
        this.trackService.getTracks(searchString).subscribe((data) => {
        this.tracks = data.results.trackmatches.track;
        console.log("result is ",this.tracks);
      });
      })
    }
       public saveTrack(track:Track)
      {
          this.trackService.saveTrack(track).subscribe((data) => {
          this.track = data;
          console.log("result is ",track);
        });
     }

    }
