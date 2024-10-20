import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string = 'Aron';
  minhaProp: boolean = false;
  personSelectedIndex: number | undefined;
  
  listPeople = [
    { name: 'Aron',   idade: 20},
    { name: 'Aron 2', idade: 21},
    { name: 'Aron3',  idade: 22},
    { name: 'Aron4',  idade: 23}
  ];

  handleInputChange(event: any)
  {
    console.log(event);
    this.name = event;
  }

  toggleProp()
  {
    this.minhaProp = !this.minhaProp;
  }  

  selectedPerson(index: number)
  {
    this.personSelectedIndex = index
  }
  

}
