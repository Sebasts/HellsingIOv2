import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class DataPathwayService{

  sharedData: String[] = [];
  
  add(data:String){
    this.sharedData.push(data);
  }
  
  clear(){
    this.sharedData = [];
  }

}
