import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  userData = { name: 'Mahesh Kale', role: 'Admin', profile: 'https://scontent.fbom15-1.fna.fbcdn.net/v/t1.0-1/p160x160/42478959_1654107534693364_6098426851024175104_n.jpg?_nc_cat=110&_nc_ht=scontent.fbom15-1.fna&oh=42550885bd62579168bc1e0c540d86fe&oe=5CE25E18' };
}
