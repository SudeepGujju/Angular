import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';

import { ListComponentComponent } from './list-component/list-component.component';

import { MainService } from './main/main.service';
import { CustomService } from './service/custom.service';

import { AgePipe } from './pipe/age.pipe';
import { CustomTitlePipe } from './pipe/custom-title.pipe';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    ListComponentComponent,
    AgePipe,
    CustomTitlePipe,
    LikeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    MainService,
    CustomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
