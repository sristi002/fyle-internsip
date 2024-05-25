import { Component, ElementRef, EventEmitter, HostListener, Output, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {


  @ViewChild('usernameInput')
  usernameInput!: ElementRef;


  // To allow data (username) to flow from the child class(user-search) to the parent class(main app)
  @Output() onUserSearch: EventEmitter<any> = new EventEmitter();

  //HostListener for the key combination "Ctrl + K"
  @HostListener('window:keydown.control.k', ['$event'])
  setFocusOnInput(event: KeyboardEvent) {
    event.preventDefault();

    this.usernameInput.nativeElement.focus();
  }

  userSeacrhForm!: FormGroup;

  constructor(private fb: FormBuilder, private renderer: Renderer2) {
    this.userSeacrhForm = this.fb.group({
      username: '',
    });
  }



  ngOnInit(): void { }

  onUserSubmit() {
    this.onUserSearch.emit(this.userSeacrhForm.value.username);
    // this.userSeacrhForm.reset();
  }



  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updatePlaceholderText();
  }


  ngAfterViewInit() {
    this.updatePlaceholderText();
  }


  updatePlaceholderText() {
    const inputElement = this.usernameInput.nativeElement;

    if (window.innerWidth < 768) {
      this.renderer.setAttribute(inputElement, 'placeholder', 'Explore GitHub Users...');
    } else {
      this.renderer.setAttribute(inputElement, 'placeholder', 'Explore GitHub Users and Repositories!');
    }
  }

}
