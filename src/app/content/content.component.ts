import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger('scrollAnimationToLeft', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ]),
    trigger('scrollAnimationToRight', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ])
  ]
})
export class ContentComponent implements OnInit {

  state = 'hide';
  state1 = 'hide';
  title = 'devkit';
  @Input() align;


  ngOnInit(): void {
  }

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset + 200;

      if (scrollPosition >= componentPosition) {
        this.state = 'show';
        this.state1 = 'show';
      }
      // } else {
      //   this.state = 'hide';
      //   this.state1 = 'hide';
      // }

    }
}
