import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';

import { ListComponentComponent } from './list-component/list-component.component';
import { LikeComponent } from './like/like.component';
import { JSONPLACEComponent } from './jsonplace/jsonplace.component';

import { MainService } from './main/main.service';
import { CustomService } from './service/custom.service';

import { AgePipe } from './pipe/age.pipe';
import { CustomTitlePipe } from './pipe/custom-title.pipe';

import { FormatDirective } from './directives/format.directive';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    ListComponentComponent,
    AgePipe,
    CustomTitlePipe,
    LikeComponent,
    FormatDirective,
    JSONPLACEComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MainService,
    CustomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
