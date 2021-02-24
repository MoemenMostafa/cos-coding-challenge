import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Auth } from 'src/app/models/auth';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private loggedInUserSubject: BehaviorSubject<Auth>;
    public loggedInUser: Observable<Auth>;

    private userStore = 'loggedInUser';

    constructor(private http: HttpClient) {
        this.loggedInUserSubject = new BehaviorSubject<Auth>(JSON.parse(localStorage.getItem(this.userStore)));
        this.loggedInUser = this.loggedInUserSubject.asObservable();
    }

    public get loggedInUserValue(): Auth {
        return this.loggedInUserSubject.value;
    }

    login(userMailId: string, password: string) {
        return this.http.put<any>(`${environment.apiUrl}/v1/authentication/${userMailId}`, { password })
            .pipe(map(auth => {
                if (auth && auth.token) {
                    localStorage.setItem(this.userStore, JSON.stringify(auth));
                    this.loggedInUserSubject.next(auth);
                }

                return auth;
            }));
    }

    logout() {
        localStorage.removeItem(this.userStore);
        this.loggedInUserSubject.next(null);
    }
}
