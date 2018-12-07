import { HttpHeaders } from '@angular/common/http';
export class Constants {
    public static API_ENDPOINT = 'http://macsof.in/admin/';
    public static ALLPETS = 'pets/all';


    public static httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Auth-key': 'petsApi',
            'Access-Control-Allow-Origin': '*'
        })
    };
}