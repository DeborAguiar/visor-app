import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../services/places.services';
import { Place } from '../../../interfaces';
import { ItensService } from '../../services/itens.services';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss'
})
export class PlaceComponent implements OnInit {

  placeId: number = 0;
  placeInfo: Place | undefined; // Ou crie uma interface para tipar as informações do museu
  itens: { id: number, nome: string }[] | undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placesService: PlacesService,
    private itensService: ItensService,
  ) { }

  ngOnInit() {
    // Obtém o ID do museu da URL
    this.route.params.subscribe(params => {
      this.placeId = params['idPlace'];
      if (this.placeId != 0) {
        this.placeInfo = this.placesService.getMuseuById(this.placeId);
        this.getItens()
      }
    },
      (err) => { console.error(err) });
  }
  getItens() {
    this.itens = this.itensService.getAllItensByPlaceId(this.placeId);
  }
}
