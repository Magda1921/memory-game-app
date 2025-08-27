import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { Select } from './select';
import { SelectOption } from '@app/types/selectOptions';

describe('Select Component (Standalone)', () => {
  let fixture: ComponentFixture<Select>;
  let component: Select;

  const mockOptions: SelectOption[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, Select],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Select);
    component = fixture.componentInstance;

    component.options = signal(mockOptions) as any;
    component.selectedValue = signal('2') as any;

    fixture.detectChanges();
  });

  it('should render the passed list of options', () => {
    const optionElements = fixture.debugElement.queryAll(By.css('option'));
    expect(optionElements.length).toBe(mockOptions.length);
    expect(optionElements[0].nativeElement.textContent).toContain('Option 1');
    expect(optionElements[1].nativeElement.textContent).toContain('Option 2');
    expect(optionElements[2].nativeElement.textContent).toContain('Option 3');
  });

  it('should set the passed default value', () => {
    const selectEl: HTMLSelectElement = fixture.debugElement.query(
      By.css('select'),
    ).nativeElement;
    expect(selectEl.value).toBe('2');
  });

  it('should emit the selected value when an option is chosen', () => {
    spyOn(component.valueChange, 'emit');

    const selectEl: HTMLSelectElement = fixture.debugElement.query(
      By.css('select'),
    ).nativeElement;

    selectEl.value = '3';
    selectEl.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.valueChange.emit).toHaveBeenCalledWith('3');
    expect(selectEl.value).toBe('3');
  });
});
