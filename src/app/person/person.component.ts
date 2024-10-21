import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {

  @Input( {required: true} ) personName:  string  = '';
  @Input( {required: true} ) personIdade: number  = 0;
  @Input( {required: true} ) personIndex: number  = 0;
  @Input( {required: true} ) isOdd:       boolean = false;
  @Input( {required: true} ) isSelected : boolean = false;

  @Output('personSelected') onPersonSelectEmmitt = new EventEmitter<number>();
 
  
  selectedPerson()
  {
    this.onPersonSelectEmmitt.emit(this.personIndex);
  }


}
