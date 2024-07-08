import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Item } from '../shared/models/item'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { projects } from '../../public/assets/projectData'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatSlideToggleModule, 
    MatCheckboxModule, 
    MatInputModule, 
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
  
})
export class AppComponent implements OnInit {
  title = 'project885';
  searchQ = '';
  items: Item[] = [];

  ngOnInit() {
    this.items = projects.map(item => new Item(item.title, item.genre, item.description));
  }

  searchItem() {
    console.log(this.searchQ);
  }
}

