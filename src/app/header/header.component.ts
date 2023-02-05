  import { Component } from '@angular/core';
  import { InputsService } from '../inputs.service';
  
  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']

  })
  export class HeaderComponent {
    name: string="";
    description: string="";
  
    constructor(private dataService: InputsService) {}
  
    addData() {
      this.dataService.addData({ name: this.name, description: this.description });
    }
  }

