import { Component, OnInit,OnDestroy } from '@angular/core';

import { WebSocketServiceService } from '../web-socket-service.service';

@Component({
  providers: [WebSocketServiceService],
  selector: 'app-web-socket-component',
  templateUrl: './web-socket-component.component.html',
  styleUrls: ['./web-socket-component.component.css']
})
export class WebSocketComponentComponent implements OnInit {

  connection;
  data;

  constructor( private webSocketService:WebSocketServiceService ) { }

  onClick(){
    console.log('そいや！');
    this.data = 'TMN';
    this.webSocketService.emit('on_name',this.data);
    this.data = '';
  }

  ngOnInit() {
    this.webSocketService.connect('hoge=hoge');
    this.connection = this.webSocketService.on('emit_name').subscribe(data=>{
      this.data = data;
    });
  }

  ngOnDestroy(){
    this.connection.unsubscribe();
  }

}
