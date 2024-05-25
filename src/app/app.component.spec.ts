import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let titleService: Title;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [Title],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    titleService = TestBed.inject(Title);
  });

  it('should create the AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should set the title on initialization', () => {
    const setTitleSpy = spyOn(titleService, 'setTitle');
    component.ngOnInit();
    expect(setTitleSpy).toHaveBeenCalledWith(component.title);
  });

  it('should update the username when userSearchHandler is called', () => {
    const newUsername = 'testuser';
    component.userSearchHandler(newUsername);
    expect(component.username).toEqual(newUsername);
  });
});
