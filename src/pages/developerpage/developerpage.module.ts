import { NgModule } from "@angular/core";
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { DeveloperPage } from "./developerpage";

@NgModule({
  declarations: [DeveloperPage],
  imports: [IonicPageModule.forChild(DeveloperPage)],
  entryComponents: [DeveloperPage]
  //bootstrap: [DeveloperPage]
})
export class DeveloperPageModule {}
