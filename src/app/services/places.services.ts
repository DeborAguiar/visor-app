import { Injectable } from '@angular/core';
import places from '../../mock/places.json';
import { Place } from '../../interfaces';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {
    getMuseuById(id: number): Place | undefined {
        let place = places.find(place => place.id == id) as Place;
        return place
    }
}
