import { Injectable } from '@angular/core';
import { Leader } from  '../shared/leaders';
import { LEADERS } from  '../shared/leader';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    //return Promise.resolve(LEADERS);
    //return new Promise(resolve=> {
    //  setTimeout(() => resolve(LEADERS), 2000);
    //});
    //return as observables:
    return of(LEADERS).pipe(delay(2000));
  }

  

  getLeader(id: number): Observable<Leader> {
    //return new Promise(resolve=> {
    //  setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);
    //});
    //return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]);
    // return as observables:
    return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<Leader> {
    //return new Promise(resolve => {
    //  setTimeout(() => resolve(LEADERS.filter((leader)=>(leader.featured))[1] ) );
    //});
    //return Promise.resolve(LEADERS.filter((leader) => (leader.featured))[1]);
    return of(LEADERS.filter((leader)=>(leader.featured))[1] );
  }

  
}
