import { Injectable } from '@angular/core';
 import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Result} from 'modals/Result';
import { Guid } from "guid-typescript";
import {Track} from 'modals/Track';

 const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
     'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class TrackService {
  public url = "http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=47f81c40cf8d8c31295d864414978071&format=json";
  public results : Result;
  trackList:Track[];
  constructor(private httpClient:HttpClient) { }
  getTracks(searchString:string):Observable<Result>
  {
    let params = new HttpParams();
    params = params.append('track',searchString);
     return this.httpClient.get<Result>(this.url,{params: params});
    
     
  }
  saveTrack(track:Track):Observable<Track>
  {
    // console.log(track);
    track.id=Guid.create().toString();
     return this.httpClient.post<Track>("http://localhost:8080/track",track,httpOptions);
     
  }
  getSavedTracks():Observable<Track[]>
  {
     return this.httpClient.get<Track[]>("http://localhost:8080/track");
      
  }
  removeTrack(id:string)
  {
    const url="http://localhost:8080/track";
   const deleteUrl=`${url}/${id}`
     return this.httpClient.delete(deleteUrl,httpOptions);   
 }
 updateTrack(id:string,track:Track){
  const url="http://localhost:8080/track";
   const deleteUrl=`${url}/${id}`
  return this.httpClient.put<Track>(deleteUrl,track,httpOptions);
}
}