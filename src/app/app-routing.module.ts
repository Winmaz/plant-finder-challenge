import { SearchByFilterComponent } from './search-by-filter/search-by-filter.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},

  {path: 'list', component: PlantListComponent},
  {path: 'search', component: SearchByFilterComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [
  RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
