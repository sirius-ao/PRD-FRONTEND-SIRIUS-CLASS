import { Component } from "@angular/core";
import { AppHeader } from "../../shared/layout/header/header";
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { Pricing } from "./components/pricing/pricing";
import { Testimonials } from "./components/testimonials/testimonials";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";

@Component({
    selector: "app-landing-page",
    templateUrl: "landing.html",
    styleUrl: "landing.scss",
    imports: [AppHeader, Hero, Features, Pricing, Testimonials, Cta, Footer]
})
    
export class LandingPage{

}