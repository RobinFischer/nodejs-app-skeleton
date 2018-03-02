import { Component, ViewChild } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";

import { UserPage } from "../userpage/userpage";
import { DeveloperPage } from "../developerpage/developerpage";

@IonicPage({
  name: "admin",
  segment: "admin"
})
@Component({
  selector: "admin-page",
  templateUrl: "adminpage.html"
})
export class AdminPage {

  user = UserPage;
  dev = DeveloperPage;
  
    constructor(public navCtrl: NavController) {}
  ionViewDidLoad() {}
}
