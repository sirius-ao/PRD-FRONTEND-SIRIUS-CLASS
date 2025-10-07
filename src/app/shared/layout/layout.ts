import { Component } from "@angular/core";
import { AppHeader } from "./header/header";
import { AppAside } from "./aside/aside";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-layout",
    imports: [AppHeader, AppAside, RouterOutlet],
    templateUrl: "layout.html",
    styleUrl: "layout.scss"
})

export class AppLayout { }