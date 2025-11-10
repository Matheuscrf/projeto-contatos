import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../services/api.service';
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

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getUsers().subscribe({
      next: (data) => {
        this.contatos = data;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }
}
