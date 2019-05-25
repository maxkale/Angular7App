import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/layout/header/header.component';
import { SidebarComponent } from '../app/layout/sidebar/sidebar.component';
import { FooterComponent } from '../app/layout/footer/footer.component';
import { LayoutModule } from '../app/layout/layout.module';
import { UserModule } from '../app/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '../app/interceptor/index';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule, UserModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
