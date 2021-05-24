import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
messages: string[]=[];
  constructor() { }
  add(pMessage:string){
      this.messages.push(pMessage);
  }

  clear(){
      this.messages=[];
  }
}
