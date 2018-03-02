import { NgModule } from "@angular/core";
import { IonicPageModule, IonicPage } from "ionic-angular";
import { AdminPage } from "./adminpage";

@NgModule({
  declarations: [AdminPage],
  imports: [IonicPageModule.forChild(AdminPage)],
  //entryComponents: [AdminPage]
  bootstrap: [AdminPage]
})
export class AdminPageModule {}
