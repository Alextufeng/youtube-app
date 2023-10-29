import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultListComponent } from './result-list.component';

describe('SearchResultsComponent', () => {
  let component: ResultListComponent;
  let fixture: ComponentFixture<ResultListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ResultListComponent],
    });
    fixture = TestBed.createComponent(ResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
