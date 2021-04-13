import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() {}
    getName(){ 
      var myname="Madhab";
      return myname;
    }
  
}
