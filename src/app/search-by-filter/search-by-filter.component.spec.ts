import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByFilterComponent } from './search-by-filter.component';

describe('SearchByFilterComponent', () => {
  let component: SearchByFilterComponent;
  let fixture: ComponentFixture<SearchByFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
