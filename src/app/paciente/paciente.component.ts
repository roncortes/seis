import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
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
    let prueba:any = [];
    this.http.get('http://localhost:3000/paciente').subscribe(data => {
      prueba= data;
    });
    
    
  }

  ngOnInit() {
    

    this.http.get('http://localhost:3000/paciente/1').subscribe(data => {
      console.log(data);
    });
  }

}
