import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();
  enterdInitialInvestment = signal('0');
  enterdAnnuagInvestment = signal('0');
  enterdExpectedReturn = signal('5');
  enterdDuration = signal('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enterdInitialInvestment(),
      annualInvestment: +this.enterdAnnuagInvestment(),
      expectedReturn: +this.enterdExpectedReturn(),
      duration: +this.enterdDuration(),
    });

    this.enterdInitialInvestment.set('0');
    this.enterdAnnuagInvestment.set('0');
    this.enterdExpectedReturn.set('5');
    this.enterdDuration.set('10');
  }
}
