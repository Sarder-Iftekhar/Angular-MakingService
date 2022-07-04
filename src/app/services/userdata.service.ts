import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return [
     {name:'Peter',age:29,email:'peter@test.com'},
     {name:'Sam',age:28,email:'sam@test.com'},
     {name:'Bruce',age:29,email:'bruce@test.com'}

    ] ;
  
  }

}
