import {CommonModule, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {PrimeNgModule} from "../primeng-module/primeng.module";
import {HttpClientModule} from "@angular/common/http";
import {StatusLetterPipe} from "./pipes/status-letter.pipe";
import {NgModule} from "@angular/core";
import {TypeLetterPipe} from "./pipes/type-letter.pipe";

@NgModule({
  declarations: [
    StatusLetterPipe,
    TypeLetterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PrimeNgModule,
  ],
  exports: [
    StatusLetterPipe,
    TypeLetterPipe
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: []
})
export class BaseModule { }
