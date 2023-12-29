import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './components/code/code.component';
import { LanguageComponent } from './components/language/language.component';
import { PlaceComponent } from './components/place/place.component';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [
  { path: '', component: LanguageComponent },
  { path: ':language/code', component: CodeComponent, pathMatch: 'full' },
  { path: ':language/place/:idPlace', component: PlaceComponent, pathMatch: 'full'  },
  { path: ':language/place/:idPlace/item/:idItem', component: ItemComponent, pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
