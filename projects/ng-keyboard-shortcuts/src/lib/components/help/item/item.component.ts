import { Component, Input, OnInit } from "@angular/core";

import { Shortcut } from "./../../../shared/models/shortcut";
import { symbols } from "./../../../shared/models/key";
import { identity } from "./../../../shared/utils/common";

/**
 * @ignore
 */
@Component({
    selector: "ng-keyboard-shortcuts-help-item",
    templateUrl: "./item.component.html",
    styleUrls: ["./item.component.css"]
})
export class KeyboardShortcutsHelpItemComponent implements OnInit {
    public parsedKeys: string[][];

    @Input() index: number;

    @Input()
    set shortcut(shortcut: Shortcut) {
        const key = Array.isArray(shortcut.key) ? shortcut.key : [shortcut.key];

        this.parsedKeys = key.map(key =>
            key
                .split(" ")
                .filter(identity)
                .filter(key => key !== "+")
                .map(key => {
                    if (symbols[key]) {
                        return symbols[key];
                    }
                    return key;
                })
        );
        this._shortcut = shortcut;
    }
    get shortcut() {
        return this._shortcut;
    }

    private _shortcut: Shortcut;

    constructor() {}

    ngOnInit() {}
}
