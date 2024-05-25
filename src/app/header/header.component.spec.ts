import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the theme from light to dark and vice versa', () => {
    // Initial state: light theme
    component.toggleTheme();
    expect(document.documentElement.classList.contains('dark')).toBeTruthy();
    expect(localStorage.getItem('color-theme')).toBe('dark');

    // Toggling back to light theme
    component.toggleTheme();
    expect(document.documentElement.classList.contains('dark')).toBeFalsy();
    expect(localStorage.getItem('color-theme')).toBe('light');

    // Toggling theme without initial state (default to light)
    component.toggleTheme();
    expect(document.documentElement.classList.contains('dark')).toBeTruthy();
    expect(localStorage.getItem('color-theme')).toBe('dark');
  });
});
