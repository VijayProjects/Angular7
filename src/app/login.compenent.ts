import { Component} from '@angular/core';

@Component({
    selector: 'app-login',
    template: `<h2>Login</h2>{{msg}}`,
    styles: ['h2{background-color:red;color:white;text-align:center}']
})
export class LoginComponent {
    msg = 'Welcome to Angurar';
}
