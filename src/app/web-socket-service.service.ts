import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class WebSocketServiceService {

  constructor() { }

  private url = 'http://localhost:3000';
  private socket;

  connect( queryString:String ) {
    this.socket = io( this.url,{query:queryString});
  }

  emit( emitName:String,data? ){
    this.socket.emit( emitName,data );
  }

  on( onName:String ){
    let observable = new Observable( observer =>{
      this.socket.on( onName,(data)=>{
        observer.next(data);
      });

      return ()=>{this.socket.disconnect();};
    });
    return observable;
  }
}
