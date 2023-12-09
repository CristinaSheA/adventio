import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-days-to-xmas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './days-to-xmas.component.html',
  styleUrl: './days-to-xmas.component.css'
})
export class DaysToXmasComponent {
  public daysToXmas() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextYear = new Date(currentYear + 1, 0, 0)
    const timeDifference = nextYear.getTime() - today.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysRemaining
  }
}
