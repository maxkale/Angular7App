import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  constructor() { }

  @Input() widgetData: any;
  @Output() filterData = new EventEmitter();
  ngOnInit() {
  }

}
