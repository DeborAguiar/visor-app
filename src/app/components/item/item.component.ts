import { Component, OnInit } from '@angular/core';
import { ItensService } from '../../services/itens.services';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../../interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {

  itemId: number = 0;
  itemInfo: Item | undefined;

  constructor(
    private route: ActivatedRoute,
    private itensService: ItensService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params['idItem'];
      if (this.itemId != 0) {
        this.itemInfo = this.itensService.getItemById(this.itemId)
      }
    },
      (err) => { console.error(err) })
  }

  back() {
    window.history.back();
    console.log(123)
  }

}
