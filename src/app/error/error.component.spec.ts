import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
    let fixture: ComponentFixture<ErrorComponent>;
    let component: ErrorComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ErrorComponent],
        });

        fixture = TestBed.createComponent(ErrorComponent);
        component = fixture.componentInstance;
    });

    it('should create the ErrorComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should display the provided error message', () => {
        const testErrorMessage = 'An error occurred';
        component.error = testErrorMessage;
        fixture.detectChanges();

        const errorComponentElement: HTMLElement = fixture.nativeElement;
        const errorTextElement = errorComponentElement.querySelector('.text-3xl');
        expect(errorTextElement?.textContent).toContain(testErrorMessage);
    });
});
