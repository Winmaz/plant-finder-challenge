import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServicesService } from '../services.service';
import { PlantEntity } from 'src/app/entities';
@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
 // changePage: EventEmitter<number> ;
    // ServicesService: any;
    constructor(private services: ServicesService) {}
  // tslint:disable-next-line: member-ordering
  @Input() plants: PlantEntity[];
  // tslint:disable-next-line: member-ordering
  @Output() changePage = new EventEmitter<number>();

  // tslint:disable-next-line: member-ordering
  currentPage = 1;


    plantData: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    pageChanged(event: any): void {
      this.changePage.emit(event.page);
    // tslint:disable-next-line: use-lifecycle-interface
      this.ngOnInit(){
        this.services.getData().subscribe((data) => {
        this.plantData = data;
        console.log('return >>', data);
       });



}
}


  }

