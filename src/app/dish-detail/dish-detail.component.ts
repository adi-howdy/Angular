import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from  '@angular/common';
import { DishService } from  '../services/dish.service';


@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})

export class DishDetailComponent implements OnInit {
 
    dish: Dish;
  //selectedDish = DISH[0];
  constructor(private dishservice: DishService, 
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
     this.dishservice.getDish(id)
    .subscribe(dish => this.dish = dish );
  }

  goBack(): void {
    this.location.back();
  }

}
