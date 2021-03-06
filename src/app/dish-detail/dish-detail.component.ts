import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from  '@angular/common';
import { DishService } from  '../services/dish.service';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})

export class DishDetailComponent implements OnInit {
 
    dish: Dish;
    dishIds: number[];
    prev: number;
    next: number;

  //selectedDish = DISH[0];
  constructor(private dishservice: DishService, 
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    //const id = +this.route.snapshot.params['id'];
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds );
    this.route.params.pipe(switchMap((params: Params ) =>  this.dishservice
    .getDish(+params ['id']) ))
    .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id) });
  }

  setPrevNext(dishId: number){
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
