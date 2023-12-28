import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageComponent } from './components/language/language.component';
import { CodeComponent } from './components/code/code.component';
import { PlaceComponent } from './components/place/place.component';

const routes: Routes = [
  { path: '', component: LanguageComponent },
  { path: ':language', children: [
    { path: 'code', component: CodeComponent },
    { path: 'place/:id', component: PlaceComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
