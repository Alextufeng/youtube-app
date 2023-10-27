import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAuthComponent } from './header-auth.component';

describe('HeaderAuthComponent', () => {
  let component: HeaderAuthComponent;
  let fixture: ComponentFixture<HeaderAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderAuthComponent]
    });
    fixture = TestBed.createComponent(HeaderAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
