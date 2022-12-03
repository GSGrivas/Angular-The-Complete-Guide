import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string; 
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Content Changed')
    console.log(this.paragraph.nativeElement.contentParagraph)
  }

  ngOnInit(): void {
    console.log('Content Initied')
  }

  ngDoCheck(): void {
    console.log('Content checked')

  }

  ngAfterContentInit(): void {
    console.log('After Content init')

  }

  ngAfterContentChecked(): void {
    console.log('After Content Initied')

  }

  ngAfterViewChecked(): void {
    console.log('After View Initied')

  }

  ngAfterViewInit(): void {
    console.log('After view Initied')

  }

  ngOnDestroy(): void {
    
  }
}
