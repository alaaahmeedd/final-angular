import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerReactiveForm : FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  // Email & Password Patterns
  emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  passwordRegex = /^(?=(?:.*[0-9]))(?=(?:.*[a-z]))(?=(?:.*[A-Z])).{6,}$/;

  // Validators
  ngOnInit(): void {
    this.registerReactiveForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
    })
  }

  // get Form Controls Object
  get registerFormControl(){
    return this.registerReactiveForm.controls;
  }

  
  handleRegister(){
    console.log("aa");
    console.log(this.registerReactiveForm.value);
  }

  // Page Navigation
  goToPage(pageName:string): void{
    this.router.navigate([`${pageName}`]);
  }

}
