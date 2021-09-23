import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ServicioEstudiante, Estudiante } from '../Service/estudiante.service';
@Component({
  selector: 'app-formularioEs',
  templateUrl: './formularioEs.component.html'
})
export class FormularioEstudianteComponent {
  nEstudiante: Estudiante = new Estudiante();

  body: any;
  form: FormGroup;

  constructor(private sEstudiante: ServicioEstudiante, public fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: [''],
      apellidos: [''],
      dni: ['']
    })
  }

  submitForm() {

    this.nEstudiante.dni = this.form.get('dni').value;
    this.nEstudiante.apellidos = this.form.get('apellidos').value;
    this.nEstudiante.nombre = this.form.get('nombre').value;

    this.sEstudiante.postEstudiante(this.nEstudiante).subscribe(
      (response) => {
        console.log(response);
        this.sEstudiante.getEstudiantes().subscribe();
      },
      (error) => console.log(error));

    this.form.reset();
    alert("Datos Guardados");

  }
}
