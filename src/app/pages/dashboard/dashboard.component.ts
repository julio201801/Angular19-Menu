import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 http=inject(HttpClient);
  constructor() {
    // Aquí puedes realizar cualquier inicialización necesaria para el componente
    this.getPcientes();
  }
  getPcientes(){
    this.http.get('http://localhost:5245/Paciente/ListaPaciente').subscribe((res:any)=>{
      console.log(res);
    },(error)=>{
      console.error('Error al obtener los pacientes:', error);
    });
  }
}
