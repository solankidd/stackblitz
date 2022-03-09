import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomComponent } from './custom.component';
//import { HelloService } from './hello.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CustomComponent],
  bootstrap: [AppComponent],
  //providers: [HelloService],
})
export class AppModule {}
