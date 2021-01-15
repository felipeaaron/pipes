import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activar'
})
export class ActivarPipe implements PipeTransform {

  transform(value: string, mostrar:boolean=true): string {
    return (mostrar) ?'*'.repeat(value.length):value;
// let nombres= value.split(' ');
// if (mostrar){
//   nombres=nombres.map(nombre =>{
//     return nombre;
//     console.log(nombre);
//   });
//     return '***********';
   
//     }
  }
}