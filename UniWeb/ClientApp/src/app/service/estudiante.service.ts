import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Estudiante {

  dni: any;
  apellidos: string;
  nombre: string;
  //telefono: string;
  //miSector: number;
  //fechaDeIngreso: Date;
}

@Injectable()
export class ServicioEstudiante {

  private estudiantesSource = new BehaviorSubject(new Object());
  estudiantes = this.estudiantesSource.asObservable();

  constructor(private http: HttpClient) { }

  getUnEstudiante(dni): Observable<Estudiante> {
    return this.http.get<Estudiante>('https://localhost/api/estudiante/' + dni)
  }

  /**Para estudiar */
  getEstudiantes(): Observable<any> {
    let estudiantesList = this.http.get<Estudiante[]>('https://localhost/api/estudiante').pipe(map(result => { this.estudiantesSource.next(result); }));

    return estudiantesList;
  }

  getEstudiantes2(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>('https://localhost/api/estudiante');
  }
  /**Fin para estudiar*/

  postEstudiante(body: Estudiante): Observable<Estudiante> {

    return this.http.post<Estudiante>('https://localhost/api/estudiante', body);
  }



}



