import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Matricula {

  CursoID: number;
  EstudianteID: number;
  
}

@Injectable()
export class ServicioMatricula {

  private matriculasSource = new BehaviorSubject(new Object());
  matriculas = this.matriculasSource.asObservable();

  constructor(private http: HttpClient) { }

  getUnaMatriculaDNI(dni): Observable<Matricula> {
    return this.http.get<Matricula>('https://localhost/api/inscripcion/' + dni)
  }

  getUnaMatriculaCurso(curso): Observable<Matricula> {
    return this.http.get<Matricula>('https://localhost/api/inscripcion/' + curso)
  }

  /**Para estudiar */
  getMatriculas(): Observable<any> {
    let estudiantesList = this.http.get<Matricula[]>('https://localhost/api/inscripcion').pipe(map(result => { this.matriculasSource.next(result); }));

    return estudiantesList;
  }

  getMatriculas2(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>('https://localhost/api/inscripcion');
  }
  /**Fin para estudiar*/

  postMatricula(body: Matricula): Observable<Matricula> {

    return this.http.post<Matricula>('https://localhost/api/inscripcion', body);
  }



}



