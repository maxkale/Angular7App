import { Component, OnInit, } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  sbtBtn: Boolean = false;
  widgetData = [{ name: 'Active', count: '2', class: 'success', message: 'User' },
  { name: 'Inactive', count: '1', class: 'danger', message: 'User' }]

  userForm = this.fb.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
  });

  get uForm() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.sbtBtn = false;
    console.log(this.userForm.value);

    this.http.post('/api/mahesh ',
      { data: this.userForm.value }).subscribe(data => {
        console.log(data);
      });
    this.userForm.reset();
  }

  ngOnInit() {
  }


}
