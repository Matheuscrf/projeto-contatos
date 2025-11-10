import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'contato-item',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <ion-item>
      <ion-label>
        <h2>{{ contato?.name }}</h2>
        <p>{{ contato?.email }}</p>
      </ion-label>
    </ion-item>
  `,
})
export class ContatoItemComponent {
  @Input() contato: any;
}
