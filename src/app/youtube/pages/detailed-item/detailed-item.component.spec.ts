import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedItemComponent } from './detailed-item.component';

describe('DetailedItemComponent', () => {
  let component: DetailedItemComponent;
  let fixture: ComponentFixture<DetailedItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailedItemComponent]
    });
    fixture = TestBed.createComponent(DetailedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
