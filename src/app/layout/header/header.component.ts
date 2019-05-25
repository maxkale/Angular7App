import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData : any;
  constructor(public user: UserService) {
    this.userData = this.user.userData;
  }
  

  ngOnInit() {
  }

}
