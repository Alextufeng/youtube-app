import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';

describe('SearchComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ResultComponent],
    });
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
