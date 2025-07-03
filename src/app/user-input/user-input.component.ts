import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  }>();
  enterdInitialInvestment: number = 0;
  enterdAnnuagInvestment: number = 0;
  enterdExpectedReturn: number = 5;
  enterdDuration: number = 10;


  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enterdInitialInvestment,
      annualInvestment: +this.enterdAnnuagInvestment,
      expectedReturn: +this.enterdExpectedReturn,
      duration: +this.enterdDuration
    });

  }
}
