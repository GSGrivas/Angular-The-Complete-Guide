import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames=['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      //Nested Form Group
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // Records changes on inputs
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // )

    // Records changes to input statuses
    this.signupForm.statusChanges.subscribe(
        (value) => console.log(value)
    )
      
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    })
    //Updates only a part of the form
    this.signupForm.patchValue({
      'userData': {
        'username': 'Anna',
      },
    })
  }
  
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }
  OnSubmit() {
    console.log(this.signupForm)
    this.signupForm.reset()
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  // Checks for forbidden names
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value)) {
      return {'nameIsForbidden': true};
    }
    return null;
  } 

  forbiddenEmails(control: FormControl): Promise<any> : Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(()=> {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
        }, 1500)
    })
    return promise;
  }
}
