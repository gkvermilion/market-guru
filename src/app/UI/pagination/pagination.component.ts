import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() currentPage: number = 1;
  @Input() total: number = 1;
  @Input() limit = 5;
  @Output() changePage = new EventEmitter<number>();

  pages: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pages = Array.from(Array(Math.ceil(this.total / this.limit)).keys()).map(i => i + 1);
    console.log('checkRender', this.pages);
    console.log('checkRender', this.currentPage);
    console.log('checkRender', this.total);
    console.log('checkRender', this.limit);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['total']) {
      this.pages = Array.from(Array(Math.ceil(this.total / this.limit)).keys()).map(i => i + 1);
    }
  }
}
