import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-simple-card-component',
    styleUrl: 'simple-card.component.scss',
    template: `
        <div class="card">
            <h3>{{label}}</h3>

            <span>
                <p>{{value}}</p>
            </span>
        </div>
    `,
    imports: []
})

export class SimpleCardComponent {
    @Input() label: String = '';
    @Input() value: String = '';
}