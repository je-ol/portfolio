import { Component, ViewEncapsulation } from '@angular/core';
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
    MatTabsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
  
})
export class AppComponent {
  title = 'project885';
  searchQ = '';
  searchItem() {
    console.log(this.searchQ);
  }
  items : Item[] = [
    new Item('About Me', 'About Me', 'I am a junior web developer. I have experience with Angular, React, and Node.js. I am currently looking for a job in web development. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit turpis porttitor neque placerat, vel ultrices mauris lacinia. Morbi aliquam, sapien quis suscipit egestas, nunc enim viverra nibh, at rutrum nunc tellus eget felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio felis. Cras vitae scelerisque erat. Etiam ut nisl non nunc pellentesque rhoncus eu non dui. Quisque bibendum, urna vitae fermentum tempor, massa dui bibendum ipsum, quis varius lectus lacus in mi.'),
    new Item('Locker-room',  'Chat', 'Locker-room is a web chat application that allows users to create chat lobbies, add users to them and chat with each other. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit turpis porttitor neque placerat, vel ultrices mauris lacinia. Morbi aliquam, sapien quis suscipit egestas, nunc enim viverra nibh, at rutrum nunc tellus eget felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio felis. Cras vitae scelerisque erat. Etiam ut nisl non nunc pellentesque rhoncus eu non dui. Quisque bibendum, urna vitae fermentum tempor, massa dui bibendum ipsum, quis varius lectus lacus in mi.'),
    new Item('Chew Champion', 'Blog', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit turpis porttitor neque placerat, vel ultrices mauris lacinia. Morbi aliquam, sapien quis suscipit egestas, nunc enim viverra nibh, at rutrum nunc tellus eget felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio felis. Cras vitae scelerisque erat. Etiam ut nisl non nunc pellentesque rhoncus eu non dui. Quisque bibendum, urna vitae fermentum tempor, massa dui bibendum ipsum, quis varius lectus lacus in mi.'),
    new Item('Bravío', 'Food Delivery', 'Bravío is a food delivery application that allows users to order food from their favorite restaurants. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit turpis porttitor neque placerat, vel ultrices mauris lacinia. Morbi aliquam, sapien quis suscipit egestas, nunc enim viverra nibh, at rutrum nunc tellus eget felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio felis. Cras vitae scelerisque erat. Etiam ut nisl non nunc pellentesque rhoncus eu non dui. Quisque bibendum, urna vitae fermentum tempor, massa dui bibendum ipsum, quis varius lectus lacus in mi.'),
    new Item('JohnFlix', 'Streaming', 'JohnFlix is a streaming application that allows users to watch movies and TV shows. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit turpis porttitor neque placerat, vel ultrices mauris lacinia. Morbi aliquam, sapien quis suscipit egestas, nunc enim viverra nibh, at rutrum nunc tellus eget felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio felis. Cras vitae scelerisque erat. Etiam ut nisl non nunc pellentesque rhoncus eu non dui. Quisque bibendum, urna vitae fermentum tempor, massa dui bibendum ipsum, quis varius lectus lacus in mi.'),
    new Item('Weather App', 'Weather', 'Weather App is a weather application that allows users to check the weather in their area. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit turpis porttitor neque placerat, vel ultrices mauris lacinia. Morbi aliquam, sapien quis suscipit egestas, nunc enim viverra nibh, at rutrum nunc tellus eget felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio felis. Cras vitae scelerisque erat. Etiam ut nisl non nunc pellentesque rhoncus eu non dui. Quisque bibendum, urna vitae fermentum tempor, massa dui bibendum ipsum, quis varius lectus lacus in mi.'),
    new Item('Emoji Search', 'Search', 'Emoji Search is an application that allows users to search for emojis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit turpis porttitor neque placerat, vel ultrices mauris lacinia. Morbi aliquam, sapien quis suscipit egestas, nunc enim viverra nibh, at rutrum nunc tellus eget felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio felis. Cras vitae scelerisque erat. Etiam ut nisl non nunc pellentesque rhoncus eu non dui. Quisque bibendum, urna vitae fermentum tempor, massa dui bibendum ipsum, quis varius lectus lacus in mi.'),
    new Item('To-Do App', 'To-Do', 'To-Do App is a to-do list application that allows users to create to-do lists. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit turpis porttitor neque placerat, vel ultrices mauris lacinia. Morbi aliquam, sapien quis suscipit egestas, nunc enim viverra nibh, at rutrum nunc tellus eget felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio felis. Cras vitae scelerisque erat. Etiam ut nisl non nunc pellentesque rhoncus eu non dui. Quisque bibendum, urna vitae fermentum tempor, massa dui bibendum ipsum, quis varius lectus lacus in mi.'),
    new Item('Game Collection', 'Collection', 'Game Collection is a collection application that allows users to add games to their collection. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit turpis porttitor neque placerat, vel ultrices mauris lacinia. Morbi aliquam, sapien quis suscipit egestas, nunc enim viverra nibh, at rutrum nunc tellus eget felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio felis. Cras vitae scelerisque erat. Etiam ut nisl non nunc pellentesque rhoncus eu non dui. Quisque bibendum, urna vitae fermentum tempor, massa dui bibendum ipsum, quis varius lectus lacus in mi.'),
  ]
}

