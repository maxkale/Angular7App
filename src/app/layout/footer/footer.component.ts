import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() { }
  get year() {
    let date = new Date();
    return date.getFullYear();
  }

  ngOnInit() {
  }

}
