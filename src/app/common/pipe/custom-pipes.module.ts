import { NgModule } from "@angular/core";
import { AgePipe } from "./age.pipe";
import { CustomTitlePipe } from "./custom-title.pipe";

@NgModule({
  declarations: [AgePipe, CustomTitlePipe],
  exports: [AgePipe, CustomTitlePipe]
})
export class CustomPipesModule {}
