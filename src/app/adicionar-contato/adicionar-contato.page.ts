import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-adicionar-contato',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './adicionar-contato.page.html',
  styleUrls: ['./adicionar-contato.page.scss'],
})
export class AdicionarContatoPage {
  name = '';
  email = '';

  constructor(private fb: FirebaseService, private toastCtrl: ToastController) {}

  async add() {
    if (!this.name || !this.email) {
      const t = await this.toastCtrl.create({ message: 'Preencha nome e email', duration: 1500 });
      await t.present();
      return;
    }

    await this.fb.addContact({ name: this.name, email: this.email });
    const t = await this.toastCtrl.create({ message: 'Contato adicionado', duration: 1500 });
    await t.present();
    this.name = '';
    this.email = '';
  }
}
