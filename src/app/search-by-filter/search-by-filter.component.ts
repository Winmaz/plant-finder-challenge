import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlantFilterEntity } from '../entities';

@Component({
  selector: 'app-search-by-filter',
  templateUrl: './search-by-filter.component.html',
  styleUrls: ['./search-by-filter.component.css']
})
export class SearchByFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<PlantFilterEntity>();

  filterPlantsForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.filterPlantsForm = fb.group({
      bloom_time: ['Summer', Validators.required],
      plant_type: [''],
      appropriate_location: [''],
      habitat_value: ['']
    });
  }
  submit(): void {
    this.filter.emit(this.filterPlantsForm.value);
  }

  ngOnInit() {
  }

}
