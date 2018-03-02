import { NgModule } from "@angular/core";
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { HomePage } from "./homepage";

@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage)],
  //entryComponents: [HomePage]
  bootstrap: [HomePage]

})
export class HomePageModule {}
