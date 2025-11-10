import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { FirebaseService } from '../services/firebase.service';
import { ContatoItemComponent } from '../components/contato-item/contato-item.component';

@Component({
  selector: 'app-listar-contatos',
  standalone: true,
  imports: [CommonModule, IonicModule, ContatoItemComponent],
  templateUrl: './listar-contatos.page.html',
  styleUrls: ['./listar-contatos.page.scss'],
})
export class ListarContatosPage implements OnInit {
  contatos: any[] = [];
  loading = true;

  constructor(private api: ApiService, private fb: FirebaseService) {}

  async ngOnInit(): Promise<void> {
    this.loading = true;
    try {
      // Primeiro tente carregar os contatos salvos no Firebase
      const fbContacts = await this.fb.listContacts();
      if (fbContacts && fbContacts.length) {
        // map para um formato compatível com o componente
        this.contatos = fbContacts.map((c: any) => ({ name: c.name, email: c.email, id: c.id }));
        this.loading = false;
        return;
      }

      // Se não houver contatos no Firebase, carregar da API externa
      this.api.getUsers().subscribe({
        next: (data) => {
          this.contatos = data;
          this.loading = false;
        },
        error: () => (this.loading = false),
      });
    } catch (err) {
      // Em caso de erro, tentar carregar da API externa
      this.api.getUsers().subscribe({
        next: (data) => {
          this.contatos = data;
          this.loading = false;
        },
        error: () => (this.loading = false),
      });
    }
  }

  // Método chamado pelo refresher
  async refresh(event: any) {
    await this.ngOnInit();
    event?.detail?.complete();
  }
}
