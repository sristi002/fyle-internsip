import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { UserSearchComponent } from './user-search.component';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSearchComponent],
      providers: [FormBuilder],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });


  it('should update the placeholder text based on window width', () => {
    // Mock the nativeElement
    const mockInput = {
      nativeElement: document.createElement('input'),
    };
    spyOn(component, 'updatePlaceholderText').and.callThrough();

    // Set the usernameInput to the mock input
    component.usernameInput = mockInput;

    // Create a mockRenderer object
    const mockRenderer = {
      setAttribute: (element: { setAttribute: (arg0: any, arg1: any) => void; }, attribute: any, value: any) => {
        element.setAttribute(attribute, value);
      },
    };

    // Call the method with the mockRenderer
    // component.renderer = mockRenderer as any; // Allow setting private property
    component.updatePlaceholderText();

    // Simulate a window resize event with width < 768
    window.innerWidth = 600;
    const resizeEvent = new Event('resize');
    component.onResize(resizeEvent);

    // Expect the placeholder text to be 'Explore GitHub Users...'
    expect(component.usernameInput.nativeElement.getAttribute('placeholder')).toBe(
      'Explore GitHub Users...'
    );

    // Simulate a window resize event with width >= 768
    window.innerWidth = 800;
    component.onResize(resizeEvent);

    // Expect the placeholder text to be 'Explore GitHub Users and Repositories!'
    expect(component.usernameInput.nativeElement.getAttribute('placeholder')).toBe(
      'Explore GitHub Users and Repositories!'
    );
  });


  it('should set focus on the username input when Ctrl + K is pressed', () => {
    const event = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true });
    spyOn(component.usernameInput.nativeElement, 'focus');
    component.setFocusOnInput(event);
    expect(component.usernameInput.nativeElement.focus).toHaveBeenCalled();
  });

  it('should emit the username on user submit', () => {
    const username = 'testUsername';
    spyOn(component.onUserSearch, 'emit');
    component.userSeacrhForm.setValue({ username });
    component.onUserSubmit();
    expect(component.onUserSearch.emit).toHaveBeenCalledWith(username);
  });

  it('should update the placeholder text after ngAfterViewInit', () => {
    const inputElement = debugElement.nativeElement.querySelector('input');
    component.ngAfterViewInit();
    expect(inputElement.getAttribute('placeholder')).toEqual('Explore GitHub Users and Repositories!');
  });


  it('should update the placeholder text based on window size', fakeAsync(() => {
    const inputElement = debugElement.nativeElement.querySelector('input');
    const resizeEvent = new Event('resize');
    window.innerWidth = 767;
    window.dispatchEvent(resizeEvent);
    tick();

    expect(inputElement.getAttribute('placeholder')).toEqual('Explore GitHub Users...');

    window.innerWidth = 768;
    window.dispatchEvent(resizeEvent);
    tick();

    expect(inputElement.getAttribute('placeholder')).toEqual('Explore GitHub Users and Repositories!');
  }));
});
