import { Component, ViewChild } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { AdminPage } from "../adminpage/adminpage";
import { HomePage } from "../homepage/homepage";

@IonicPage({
  name: "developer",
  segment: "developer"
})
@Component({
  selector: "developer-page",
  templateUrl: "developerpage.html"
})
export class DeveloperPage {
  // this is the important part for working with the ionic stack navigation
  // page2 = Page2;
  admin = AdminPage;
  home = HomePage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {}
}
