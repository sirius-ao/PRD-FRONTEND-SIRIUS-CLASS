import { Component } from "@angular/core";
import { AsideControllerService } from "../../services/aside-controller.services";
import { lucideBell, lucideList, lucideLogs, lucideMenu, lucideMoon, lucideSettings, lucideSquareMenu } from "@ng-icons/lucide"
import { provideIcons, NgIcon } from "@ng-icons/core";


@Component({
    selector: "app-header",
    imports: [NgIcon],
    templateUrl: "header.html",
    styleUrl: "header.scss",
    providers: [
        provideIcons({ lucideMenu, lucideList, lucideLogs, lucideBell, lucideMoon, lucideSettings })
    ]
})

export class AppHeader { 
    constructor(private _asideController: AsideControllerService) { }
    
    changeAsideState() {
        this._asideController.changeAsideState();
    }
}