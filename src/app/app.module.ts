import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLoadersCssModule } from 'projects/ngx-loaders-css/src/public_api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxLoadersCssModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
