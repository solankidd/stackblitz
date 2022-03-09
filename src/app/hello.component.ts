import { Component, ContentChild, Input } from '@angular/core';
import { inject } from '@angular/core/testing';
import { HelloService } from './hello.service';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{name}}!</h1>
    <ng-content ></ng-content>
    <ng-content h1></ng-content>
    <ng-content img></ng-content>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  /* constructor(
    private helloService: HelloService
  ){} */
  constructor(
    private helloService: HelloService
  ){}
  @Input() name: string;
}
