import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Output() backgroundColorChanged = new EventEmitter<string>();
  color: string;

  constructor() { }

  ngOnInit() {
  }

  onChangeColor(){
    this.backgroundColorChanged.emit(this.color)
  }

}