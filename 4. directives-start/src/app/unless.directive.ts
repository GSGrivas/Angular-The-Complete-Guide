import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { clear } from "console";
import { inflate } from "zlib";

@Directive( {
    selector: '[appUnless]'
})
export class UnlessDirective {
    @Input() set appUnless(condition: boolean) {
        if(!condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        } else 
        {
            this.vcRef.clear()
        }
    }

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

    }
}