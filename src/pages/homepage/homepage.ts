import { Component, ViewChild } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { AdminPage } from "../adminpage/adminpage";
import { UserPage } from "../userpage/userpage";
import { DeveloperPage } from "../developerpage/developerpage";

@IonicPage({
  name: "home",
  segment: "home"
})
@Component({
  selector: "home-page",
  templateUrl: "homepage.html"
})
export class HomePage {
  // this is the important part for working with the ionic stack navigation
  // page2 = Page2;
  admin = AdminPage;
  user = UserPage;
  dev = DeveloperPage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {}
}
