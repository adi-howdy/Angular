import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';

import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    //return Promise.resolve(PROMOTION);
    return of(PROMOTION).pipe(delay(2000));
  }

  getPromotion(id: number): Observable<Promotion> {
    //return Promise.resolve(PROMOTION.filter((promo) => (promo.id === id))[0]);
    return of(PROMOTION.filter((promo) => (promo.id === id))[0]);
  }

  getFeaturedPromotion(): Observable<Promotion> {
    //return Promise.resolve(PROMOTION.filter((promotion) => promotion.featured)[0]);
    return of(PROMOTION.filter((promotion) => promotion.featured)[0]);
  }
}
