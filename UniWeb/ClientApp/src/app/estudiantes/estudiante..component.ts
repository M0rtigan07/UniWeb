import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ServicioEstudiante } from '../Service/estudiante.service';
import { Estudiante } from '../Service/estudiante.service';
import { FormularioEstudianteComponent } from './formularioEs.component';

@Component({
  selector: 'estudiante',
  templateUrl: './estudiante.component.html',
  providers: [ServicioEstudiante],
})
export class EstudianteComponent {
  estudiante: Estudiante = new Estudiante();
  aEstudiantes: Estudiante[] = [new Estudiante()];
  controlBusqueda = new FormControl();
 


  constructor(private sEstudiante: ServicioEstudiante) { }

  ngOnInit() {
    this.controlBusqueda.valueChanges.pipe(filter(text => text.length >= 3)).subscribe(
      value => {
        
        this.sEstudiante.getUnEstudiante(value).subscribe(dato => {

          this.estudiante = dato;
        })
      }
    )

    this.sEstudiante.getEstudiantes().subscribe(data => {
      if (data)
        this.estudiante = data;
    });
       
    this.sEstudiante.getEstudiantes().subscribe();

    this.sEstudiante.estudiantes.subscribe((data: Estudiante[]) => {
      if (data)
        this.aEstudiantes = data;
    });



    
  }
}
