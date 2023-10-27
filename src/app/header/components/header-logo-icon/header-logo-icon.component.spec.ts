import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogoIconComponent } from './header-logo-icon.component';

describe('HeaderLogoIconComponent', () => {
  let component: HeaderLogoIconComponent;
  let fixture: ComponentFixture<HeaderLogoIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderLogoIconComponent]
    });
    fixture = TestBed.createComponent(HeaderLogoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
