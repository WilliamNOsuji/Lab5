import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

// METTRE VOTRE PROPRE CLÉ D'API !!
const googleApiKey = "AIzaSyBB5up-iVS8VU95FbiPpyTRPLjH-QejfNc";

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(public http : HttpClient) { }

  async searchVideoId(searchText : string) : Promise<any>{

    // Requête pour obtenir l'Id d'une vidéo YouTube ici ! Utilisez le paramètre searchText.
    let videoInfo = await lastValueFrom(this.http.get<any>("https://www.googleapis.com/youtube/v3/search?type=video&part=id&maxResults=1&key="+googleApiKey+"&q="+searchText))
    console.log(videoInfo)
    let videoID = videoInfo.items[0].id.videoId
    // Remplacez ce return par l'id de la vidéo obtenue.
    return videoID;
  }

}
