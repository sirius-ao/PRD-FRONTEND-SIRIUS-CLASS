import { Component, Input } from "@angular/core";

@Component({
    selector: "app-header-indicator-page-component",
    templateUrl: "header-indicator-page.component.html",
    styleUrl: "header-indicator-page.component.scss",
    imports: [],
})

export class HeaderIndicatorPageComponent { 
    @Input() moduleName: String = ''
    @Input() pageName: String = ''
}