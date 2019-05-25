import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { WidgetComponent } from '../layout/widget/widget.component';
import { PlainToHtmlPipe } from '../filter/plain-to-html.pipe';

@NgModule({
  declarations: [UserComponent, WidgetComponent, PlainToHtmlPipe],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],

})
export class UserModule { }
