import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
})
export class CatComponent {
  @Input() cat: any;
}
