import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchSettingsComponent } from './header-search-settings.component';

describe('HeaderSearchSettingsComponent', () => {
  let component: HeaderSearchSettingsComponent;
  let fixture: ComponentFixture<HeaderSearchSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderSearchSettingsComponent],
    });
    fixture = TestBed.createComponent(HeaderSearchSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
