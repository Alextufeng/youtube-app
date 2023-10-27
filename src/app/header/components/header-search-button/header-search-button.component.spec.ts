import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchButtonComponent } from './header-search-button.component';

describe('HeaderSearchButtonComponent', () => {
  let component: HeaderSearchButtonComponent;
  let fixture: ComponentFixture<HeaderSearchButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderSearchButtonComponent]
    });
    fixture = TestBed.createComponent(HeaderSearchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
