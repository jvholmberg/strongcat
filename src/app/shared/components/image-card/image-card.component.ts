import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input() avatarClassName: string = 'avatar-image';
  @Input() title: string;
  @Input() subtitle: string;
  @Input() imageSrc: string;
  @Input() imageAlt: string;
  @Input() leftButtonText: string;
  @Input() rightButtonText: string;

  @Output() onLeftButtonClick: EventEmitter<void> = new EventEmitter();
  @Output() onRightButtonClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
