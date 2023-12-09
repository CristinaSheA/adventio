import { Injectable, inject } from '@angular/core';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  images: string[] = [
    'Candy 1.png',
    'Candy 2.png',
    'Candy 3.png',
    'Candy 4.png',
    'Candy 5.png',
    'Candy 6.png',
    'Candy 7.png',
    'Candy 8.png',
    'Candy 9.png',
    'Candy 10.png',
    'Candy 11.png',
    'Candy 12.png',
    'Candy 13.png',
    'Candy 14.png',
    'Candy 15.png',
    'Candy 16.png',
    'Candy 17.png',
    'Candy 18.png',
    'Candy 19.png',
    'Candy 20.png',
    'Candy 21.png',
    'Candy 22.png',
    'Candy 23.png',
    'Candy 24.png',
    'Candy 25.png',
    'Candy 26.png',
    'Candy 27.png',
    'Candy 28.png',
    'Candy 29.png',
    'Candy 30.png',
    'Candy 31.png',
  ];
  public randomImagePaths: string[] = [];
  private readonly appStateService = inject(AppStateService)

  constructor() { }

  public getRandomImagePaths(): string[] {
    const randomImagePaths: string[] = [];

    const availableImageIndices: number[] = [];
    for (let i = 0; i < this.images.length; i++) {
      availableImageIndices.push(i);
    }

    for (const date of this.appStateService.giftDays) {
      const randomIndex = Math.floor(Math.random() * availableImageIndices.length);
      const imageIndex = availableImageIndices[randomIndex];
      availableImageIndices.splice(randomIndex, 1);

      const randomImagePath = "../../../../assets/img/candies-img/" +  this.images[imageIndex];
      randomImagePaths.push(randomImagePath);
    }

    this.randomImagePaths = randomImagePaths
    return randomImagePaths;
  }
}
