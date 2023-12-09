import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppStateService } from '../../services/app-state.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'candy-surprise-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candy-surprise-popup.component.html',
  styleUrls: ['./candy-surprise-popup.component.css'],
})
export class CandySurprisePopupComponent {
  public appStateService = inject(AppStateService);
  public imageService = inject(ImageService);

  private http = inject(HttpClient);

  ngOnInit() {
    this.getCandies().subscribe(
      (data: any[]) => {
        this.appStateService.candies = data;
        this.appStateService.randomObj = this.getRandomCandy();
        this.updateCandy();
      },
      (error: any) => console.error(error)
    );
  }


  public getImage() {
    return `http://localhost:3090/${this.appStateService.randomObj.image}`;
  }

  public closePanel() {
    this.appStateService.showNewCandyPanel = false;
    this.appStateService.showDarkerLayer = false;
  }

  public updateCandy(): void {
    if (!this.appStateService.randomObj) return;
    const candy = this.appStateService.randomObj;
    this.increaseRecollectedCandies()
    this.appStateService.randomObj.quantity -= 1;
    this.http.patch(`${this.appStateService.apiUrl}/${candy.id}`, {
      quantity: candy.quantity,
      recollected: candy.recollected,
    }).subscribe(
      (response: any) => console.log(response),
      (error: any) => console.error(error)
    );
  }

  private getCandies(): Observable<any> {
    return this.http.get(this.appStateService.apiUrl);
  }

  private getRandomCandy(): any {
    let candiesWithQuantity = this.appStateService.candies.filter(
      (candy) => candy.quantity > 0
    );
    if (candiesWithQuantity.length > 0) {
      let randomIndex = Math.floor(Math.random() * candiesWithQuantity.length);
      return candiesWithQuantity[randomIndex];
    } else {
      return null;
    }
  }

  public increaseRecollectedCandies() {
    this.appStateService.candiesTotalRecollected++
    localStorage.setItem('savedCandiesRecollected', this.appStateService.candiesTotalRecollected.toString());
  }
}

