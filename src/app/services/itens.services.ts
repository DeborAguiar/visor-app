import { Injectable } from '@angular/core';
import itens from '../../mock/itens.json';
import { Item, Place } from '../../interfaces';

@Injectable({
    providedIn: 'root'
})
export class ItensService {
    getAllItensByPlaceId(placeId: number): { id: number, nome: string }[] {
        return itens
            .filter(item => item.id_museu == placeId)
            .map((item) => { return { id: item.id_obra, nome: item.nome_obra } })
    }
}
