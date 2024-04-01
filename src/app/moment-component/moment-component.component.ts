import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-moment-component',
  standalone: true,
  template: `
    <p>{{ myBirthday() }}</p>
    <button (click)="setBirthday()">Set Birthday</button>
  `,
})
export class MomentComponentComponent {
  public myBirthday = signal<string | null>(null);

  setBirthday() {
    import('moment').then((moment) => {
      this.myBirthday.set(moment.default('1995-05-11').format('YYYY-MM-DD'));
    });
  }
}
