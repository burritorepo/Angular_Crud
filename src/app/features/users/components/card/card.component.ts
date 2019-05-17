import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit, OnChanges {
  @Input() user: Array<object>;
  constructor() {
  }

  ngOnInit(): void {
    console.log('user values', this.user);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('user', changes);
  }

  onDelete(value,id){
    console.log('value',value,'id',id);
  }
}
