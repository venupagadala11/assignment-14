
import { Component } from '@angular/core';
import { InputsService } from '../inputs.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  data: any[];

  constructor(private dataService: InputsService) {
    this.data = this.dataService.data;
  }

  // deleteData(item:any) {
  //   this.dataService.deleteData(item);
  // }
  deleteData(item:any) {
    this.data = this.data.splice(item,0);
  }
}

