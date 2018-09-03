import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable()
export class TokenService{

    data : any = null;
    email : string = null;
    password : string = null;

    constructor(private _http: HttpClient){ }

    getNewToken(mail, pwd, callback){
        this.email = mail;
        this.password = pwd;

        let username: string = 'test@test.com';
        let password: string = 'Test123*';

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        headers = headers.append("Content-Type", "application/x-www-form-urlencoded");

        return this._http.post('/oauth/token?grant_type=password&username='+mail+'&password='+pwd, this.data, {headers}).subscribe(data => {
            this.data = data;
            if(callback){
                callback(data);
            }
        },(err :HttpErrorResponse) => {
            if(err.status == 401 || err.status == 400){
                callback("error");
            }
        });
    }

    refreshMyToken(){
        let username: string = 'test@test.com';
        let password: string = 'Test123*';
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        headers = headers.append("Content-Type", "application/x-www-form-urlencoded");

        return this._http.post('/oauth/token?grant_type=refresh_token&refresh_token='+this.data.refresh_token, this.data, {headers}).subscribe(data => {
            this.data = data;
        }, (err: HttpErrorResponse) =>{
            if( err.error instanceof Error){
                console.log('An error occurred: ', err.error.message)
            }else{
                console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
                if(err.status == 401){
                    this.getNewToken(this.email, this.password, null);
                }
            }
        });
    }

    getMyToken(): HttpHeaders{
        if(this.data != null){
            const headers = new HttpHeaders().set("Authorization", "Bearer "+this.data.access_token);
            return headers;
        }
    }
}
