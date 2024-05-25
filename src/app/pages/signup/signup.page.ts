import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/authentication.service';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  regForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder, 
    public loadingCtrl: LoadingController, 
    public authService: AuthenticationService, 
    public router: Router, 
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9.]{1,64}@gmail\\.com$")]],
      password: ['', [Validators.required, Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]).{8,}")]]
    });
  }

  get errorControl() {
    return this.regForm?.controls;
  }

  async signUp() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.regForm?.valid) {
      const user = await this.authService.registerUser(this.regForm.value.email, this.regForm.value.password)
        .catch((error) => {
          console.log(error);
          loading.dismiss();
        });

      if (user) {
        let userdata: User = { 
          name: this.regForm.value.fullname, 
          email: this.regForm.value.email, 
          id: user.user.uid, 
          fotos: ['https://static.wikia.nocookie.net/monsterhunterespanol/images/e/e7/MH15th-Fatalis_Artwork_002.jpg/revision/latest?cb=20200430230120&path-prefix=es'] 
        };
        this.userService.save(userdata);
        loading.dismiss();
        this.router.navigate(['/notes']);
      } else {
        console.log('provide');
      }
    }
    loading.dismiss();
  }

}
