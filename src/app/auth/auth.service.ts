import {Injectable} from '@angular/core';
import {FirebaseAuthState, AuthProviders, AuthMethods, AngularFire} from "angularfire2";

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState = null;

  constructor(public af: AngularFire) {
    af.auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  signIn(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.login({
      email: email,
      password: password
    }, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
  }

  signOut(): void {
    this.af.auth.logout();
  }

}
