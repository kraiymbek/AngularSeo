import {Component, OnInit, Input, Output, EventEmitter, HostBinding} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button
      (click)="handleClick($event)"
      type="{{type || 'button'}}"
      class="btn btn-primary {{btnName}}">
      <ng-content></ng-content>
    </button>
`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @HostBinding('style.fontSize.px') fontSize: string = '25';
  @Input() btnName: string;
  @Input() type: string;
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter<any>();

  handleClick(event: any) {
    this.onClickEvent.emit(event);
  }






  constructor() { }

  ngOnInit() {
  }
  onClick(){

  }

}
