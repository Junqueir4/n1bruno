import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from './character';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpellsListComponent } from './spells/spells-list/spells-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, SpellsListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'spa-harry-potter';
  characters: Character[] = [];

  constructor(private route: ActivatedRoute) {
    // Carrega todos os personagens ao inicializar
    this.route.data.subscribe((data) => {
      this.characters = data['characters'];
      console.log('Dados carregados pelo resolver:', this.characters);
    });
  }
}
