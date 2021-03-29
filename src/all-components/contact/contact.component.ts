import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  sendMail(fvalue:any){
    console.log(fvalue);
    alert("Thanks " +fvalue.txtName+" for contacting us!!!");
    this.router.navigate(["home"]);
  } 

}
