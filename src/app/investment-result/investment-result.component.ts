import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../../investment.Service';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
