import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  constructor(private http:HttpClient) { 

  }

  getPaciente(){
    let prueba:any = this.http.get('http://192.168.0.15:3000/usuario');
    alert(this.http.get('http://192.168.0.15:3000/usuario'));
  }

  ngOnInit() {
    this.getPaciente();
  }

}
