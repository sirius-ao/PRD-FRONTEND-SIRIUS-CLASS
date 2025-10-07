import { Component, computed } from "@angular/core";
import { AsideControllerService } from "../../services/aside-controller.services";
import { CommonModule } from "@angular/common";
import { provideIcons, NgIcon } from "@ng-icons/core";
import {
    lucideGraduationCap,
    lucideLayoutDashboard,
    lucidePresentation,
    lucideFile,
    lucideFolderOpen,
    lucideChartPie,
    lucideIdCardLanyard,
    lucideNotebook,
    lucideLibrary,
    lucideSquareCheckBig,
    lucideFileSearch,
    lucideCalendarClock,
    lucideCalendar,
    lucideBookCopy,
    lucideChevronDown,
    lucideChartNoAxesCombined,
    lucideCoins,
    lucideHandCoins
} from "@ng-icons/lucide";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: "app-aside",
    imports: [CommonModule, NgIcon, RouterLinkActive, RouterLink],
    templateUrl: "aside.html",
    styleUrl: "aside.scss",
    providers: [
        provideIcons({
            lucideLayoutDashboard,
            lucideGraduationCap,
            lucidePresentation,
            lucideFile,
            lucideFolderOpen,
            lucideChartPie,
            lucideIdCardLanyard,
            lucideNotebook,
            lucideLibrary,
            lucideSquareCheckBig,
            lucideFileSearch,
            lucideCalendarClock,
            lucideCalendar,
            lucideBookCopy,
            lucideChevronDown,
            lucideChartNoAxesCombined,
            lucideHandCoins
        })
    ]
})

export class AppAside { 
    protected activeLink: string = '';
    protected indicadorDropController: boolean = false;
    constructor(protected _asideController: AsideControllerService) { }

    changeActiveLink(link: string) {
        this.activeLink = link;
        this._asideController.setSubMenu();
    }

    changeIndicatorDropController() {
        this.indicadorDropController = !this.indicadorDropController;
    }

}