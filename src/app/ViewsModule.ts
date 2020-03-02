import { AppRoutingModule } from './app-routing.module';
import { ServicesService } from './services.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { SearchByFilterComponent } from './search-by-filter/search-by-filter.component';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PlantListComponent,
    SearchByFilterComponent,
    AddPlantComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ServicesService, SearchByFilterComponent],
  bootstrap: [AppComponent]
})
export class ViewsModule {
}
