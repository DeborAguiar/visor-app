import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../services/places.services';
import { Place } from '../../../interfaces';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss'
})
export class PlaceComponent implements OnInit {

  placeId: number = 0;
  placeInfo: Place | undefined; // Ou crie uma interface para tipar as informações do museu

  constructor(private route: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() {
    // Obtém o ID do museu da URL
    this.route.params.subscribe(params => {
      this.placeId = params['id'];
      if (this.placeId != 0) {
        this.placeInfo = this.placesService.getMuseuById(this.placeId);
        
      }
    },
      (err) => { console.error(err) });
  }
}
