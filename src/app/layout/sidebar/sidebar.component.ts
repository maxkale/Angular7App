import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  Menu: any = [{ id: 1, name: 'Dashboard', icon: 'fa-dashboard', route: '/dashboard', isSubmenu: 0 },
  { id: 2, name: 'User', icon: 'fa-user', route: '/user', isSubmenu: 0 },
  {
    id: 3, name: 'Sales', icon: 'fa-bar-chart', route: '', isSubmenu: 1, subMenu: [
      { id: 1, name: 'Presales', route: '/presales' },
      { id: 2, name: 'Postsales', route: '/postsales' },
    ]
  },
  { id: 4, name: 'Report', icon: 'fa-signal', route: '/report', isSubmenu: 0 },
  ]
  constructor() { }
  ngOnInit() {

  }
  SubMenu(id: any) {
    var menu: any = $('.submenu:eq(' + id + ')');
    if (menu.children("a").hasClass('subdrop')) {
      menu.children("ul").css('display', 'none');
      menu.children("a").removeClass('subdrop');
    } else {
      menu.children("a").addClass('subdrop');
      menu.children("ul").css('display', 'block');

    }
  }

}

