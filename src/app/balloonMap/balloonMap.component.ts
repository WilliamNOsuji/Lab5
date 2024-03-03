import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balloonMap',
  templateUrl: './balloonMap.component.html',
  styleUrls: ['./balloonMap.component.css']
})
export class BalloonMapComponent implements OnInit {

  inputLat : number = 0;
  inputLng : number = 0;

  center : google.maps.LatLngLiteral = {lat: 42, lng: -4};
  zoom : number = 2;

  // Ajoutez une variable de classe qui servira de tableau de marqueurs
  markerPositions : google.maps.LatLngLiteral[] = [
    {lat: 42, lng: -4},
    {lat: 40, lng: -0},
    {lat: 38, lng: -8}
  ]

  constructor() { }

  ngOnInit() {
  }

  addBalloon() : void {
    // Ajoutez un marqueur dans votre tableau de marqueurs en vous servant des données this.inputLat et this.inputLng !
    this.markerPositions.push({lat: this.inputLat,lng: this.inputLng});
  }

  clearBalloons() : void {
    // Videz le tableau de marqueurs ! (= [])
    this.markerPositions = [];
  }

}
