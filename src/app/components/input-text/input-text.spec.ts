import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputText } from './input-text';
import { provideZonelessChangeDetection, signal } from '@angular/core';

describe('InputText', () => {
  let fixture: ComponentFixture<InputText>;
  let component: InputText;

  // Mock dla inputów required
  const mockId = 'username';
  const mockName = 'username';
  const mockPlaceholder = 'Enter your username';
  const mockLabel = 'Username';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputText],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputText);
    component = fixture.componentInstance;

    // 🔑 Ustawienie inputów jako sygnały, tak jak w przykładzie z Select
    component.id = signal(mockId) as any;
    component.name = signal(mockName) as any;
    component.placeholder = signal(mockPlaceholder) as any;
    component.label = signal(mockLabel) as any;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
