import { Component } from "@angular/core";
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { Pricing } from "./components/pricing/pricing";
import { Testimonials } from "./components/testimonials/testimonials";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";
import { HeaderLandingpage } from "./components/header/header";

@Component({
    selector: "app-landing-page",
    templateUrl: "landing.html",
    styleUrl: "landing.scss",
    imports: [Hero, Features, Pricing, Testimonials, Cta, Footer, HeaderLandingpage]
})
    
export class LandingPage{

}