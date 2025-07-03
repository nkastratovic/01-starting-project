import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enterdInitialInvestment: number = 0;
  enterdAnnuagInvestment: number = 0;
  enterdExpectedReturn: number = 5;
  enterdDuration: number = 10;


  onSubmit() {
    console.log('User Inputs:');
    console.log(this.enterdInitialInvestment);
    console.log(this.enterdAnnuagInvestment);
    console.log(this.enterdExpectedReturn);
    console.log(this.enterdDuration);
  }
}
