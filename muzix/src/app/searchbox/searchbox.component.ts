import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { Result } from 'modals/Result';
import {Router} from '@angular/router'

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
public tracks:Result;
  constructor(private trackService: TrackService,private route:Router) { }

  ngOnInit() {
  }
getLastFmTracks(searchString)
{
  this.trackService.getTracks(searchString).subscribe((data) => 
  {
    this.tracks = data;
    console.log(this.tracks);
    this.route.navigate(["/track",searchString]);
  });
  
    
  }
}