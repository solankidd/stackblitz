import { Component, OnInit, VERSION } from '@angular/core';
import { HelloService } from './hello.service';
import { HelloServiceTwo } from './Hello2.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: HelloService,
      useClass: HelloServiceTwo,
    },
  ],
})
export class AppComponent implements OnInit {
  constructor() {}

  name = 'Angular ' + VERSION.major;
  nameTwo = 'customName';

  ngOnInit() {}
}
