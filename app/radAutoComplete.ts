import { registerElement, NativeElementNode } from "svelte-native/dom";
import { RadAutoCompleteTextView, SuggestionView, CollectionViewEventData } from "nativescript-ui-autocomplete"

import { createElement } from 'svelte-native/dom';
import { View } from "tns-core-modules/ui/core/view/view";


export class SuggestionViewElement extends NativeElementNode {
    constructor() {
        super('suggestionView', SuggestionView as any, null);
    }
}

export class RadAutoCompleteTextViewElement extends NativeElementNode {
    constructor() {
        super('radAutoCompleteTextView', RadAutoCompleteTextView, null)
        let nativeView = this.nativeView as RadAutoCompleteTextView;

        nativeView.itemViewLoader = (viewType: any): View => this.loadView(viewType)
        this.nativeView.on(RadAutoCompleteTextView.itemLoadingEvent, (args) => { this.updateListItem(args as CollectionViewEventData) });
    }

    loadView(viewType: string): View {
        let componentClass = this.getComponentForView();
        if (!componentClass) return null;

        console.log("creating view for ",viewType)
        let wrapper = createElement('StackLayout') as NativeElementNode;
        let componentInstance = new componentClass({
            target: wrapper,
            props: {
                item: {}
            }
        });

        let nativeEl = wrapper.nativeView;
        (nativeEl as any).__SvelteComponent__ = componentInstance;
        return nativeEl;
    }

    getComponentForView(): any {
        let templateEl = this.childNodes.find(n => n.tagName == "template") as any;
        if (!templateEl) 
            return null;
        return templateEl.component;
    }

    updateListItem(args: CollectionViewEventData) {
        if (args.view && (args.view as any).__SvelteComponent__) {
            let componentInstance: SvelteComponent = (args.view as any).__SvelteComponent__
            console.log("updating view for ", args.view, args.data)
            componentInstance.$set({ item: args.data })
        } else {
            console.log("got invalid update call with", args.index, args.view)
        }
    }
}

export function register() {
    registerElement('radAutoCompleteTextView', () => new RadAutoCompleteTextViewElement())
    registerElement('suggestionView', () => new SuggestionViewElement())
}
