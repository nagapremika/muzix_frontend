import { Component, OnInit,Inject } from '@angular/core';
import { Track } from 'modals/Track';
import { TrackService } from '../track.service';
import { Router } from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.css']
})
export class PlaylistCardComponent implements OnInit {
public tracks:Track[];
updatedComment: string;
updateTrack: Track;
  constructor(private trackService:TrackService,private route:Router,private dialog:MatDialog) { }

  ngOnInit() {
   this.get();
  }
  public delete(track:Track){
    this.trackService.removeTrack(track.id).subscribe();
        console.log(track);
        this.get();
        
    }
    get(){
      this.trackService.getSavedTracks().subscribe((data)=>{
        this.tracks=data;
        console.log(this.tracks);
        this.route.navigateByUrl("playlist");
  
      });
    }
    
    openDialog(track: Track) {
      this.updateTrack = track;
      const dialogRef = this.dialog.open(ComponentDialogue,
        {
          width: '250px',
          data: {}
        });
      dialogRef.afterClosed().subscribe(result => {
        this.updatedComment = result;
        console.log(`Dialog result: ${result}`);
        console.log(`updated comment:`, this.updatedComment);
        this.updatetrack();
      });
    }
    updatetrack() {
      this.updateTrack.name = this.updatedComment;
      this.trackService.updateTrack(this.updateTrack.id, this.updateTrack).subscribe(
        (data) => {
          console.log("updated Track ", data);
          this.trackService.getSavedTracks().subscribe(
            data => { this.tracks = data }
          )
        }
      );
    }
   }
   @Component({
     selector: 'play-list-comment-dialogue',
     templateUrl: 'playlistcard-component-dialog-component.html',
    })
    export class ComponentDialogue {
     constructor(
       public dialogRef: MatDialogRef<ComponentDialogue>,
       @Inject(MAT_DIALOG_DATA) public data: Track) { }
     onNoClick(): void {
       this.dialogRef.close();
     }
    }
   


