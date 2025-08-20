import { Component } from '@angular/core';
import { InputText } from '../input-text/input-text';
import { Select } from '../select/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'start-screen',
  imports: [InputText, Select, FormsModule],
  templateUrl: './start-screen.html',
  styleUrl: './start-screen.scss',
})
export class StartScreen {
  selectedDifficulty = 'easy';
}
