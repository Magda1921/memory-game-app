import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button } from './button';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('Button', () => {
  let fixture: ComponentFixture<Button>;
  let router: Router;

  const mockVariantClass = 'btn-primary';
  const mockLabel = 'Click Me';
  const mockHref = '/home';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button, CommonModule, RouterTestingModule],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(Button);

    fixture.componentRef.setInput('variantClass', mockVariantClass);
    fixture.componentRef.setInput('label', mockLabel);
    fixture.componentRef.setInput('disabled', false);
    fixture.componentRef.setInput('href', '');

    fixture.detectChanges();
  });

  const getButton = () =>
    fixture.debugElement.query(By.css('button'))
      ?.nativeElement as HTMLButtonElement;

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the label', () => {
    const buttonEl = getButton();
    expect(buttonEl.textContent).toContain(mockLabel);
  });

  it('should apply the correct variant class', () => {
    const buttonEl = getButton();
    expect(buttonEl.classList.contains(mockVariantClass)).toBeTrue();
  });

  it('should be disabled when disabled input is true', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const buttonEl = getButton();
    expect(buttonEl.disabled).toBeTrue();
  });

  it('should navigate via Router when href is provided and clicked', () => {
    const navigateSpy = spyOn(router, 'navigateByUrl').and.resolveTo(true);
    fixture.componentRef.setInput('href', mockHref);
    fixture.detectChanges();

    const buttonEl = getButton();
    buttonEl.click();

    expect(navigateSpy).toHaveBeenCalledWith(mockHref);
  });

  it('should emit click event when clicked and href is not set', () => {
    spyOn(fixture.componentInstance.buttonClick, 'emit');
    const buttonEl = getButton();
    buttonEl.click();
    expect(fixture.componentInstance.buttonClick.emit).toHaveBeenCalled();
  });
});
