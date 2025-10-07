import { computed, Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AsideControllerService { 
    private _asideState = signal(3);
    private _asideStateComputed = computed(() => this._asideState());
    private direction: String = "desc"; 

    get atualAsideState() { 
        return this._asideStateComputed;
    };

    changeAsideState() {
        if (this.direction == 'asc') { 
            if (this._asideState() < 3) {
                this._asideState.set(this._asideState() + 1);
            } else {
                this.direction = "desc";
                this._asideState.set(this._asideState() - 1);
           }
        } else {
            if (this._asideState() > 1) {
                this._asideState.set(this._asideState() - 1);
            } else {
                this.direction = "asc";
                this._asideState.set(this._asideState() + 1);
            }
        }
    }

    setSubMenu() {
        this._asideState.set(3);
    }
}