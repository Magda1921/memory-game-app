import { Component } from '@angular/core';
import { InputText } from '../../components/input-text/input-text';
import { Select } from '../../components/select/select';
import { FormsModule } from '@angular/forms';
import { Button } from '../../components/button/button';

@Component({
  selector: 'start-screen',
  imports: [InputText, Select, FormsModule, Button],
  templateUrl: './start-screen.html',
  styleUrl: './start-screen.scss',
})
export class StartScreen {
  selectedDifficulty = 'easy';

  startGame(): void {}
}
