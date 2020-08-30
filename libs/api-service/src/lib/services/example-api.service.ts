import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "@client/interfaces";

@Injectable()
export class ExampleApiService {
    readonly USERS_BASE_PATH = "/api/users";

    constructor(private readonly http: HttpClient) {}

    postUser(user: User): Observable<User> {
        return this.http.post<User>(this.USERS_BASE_PATH, user);
    }

    putUser(user: User): Observable<User> {
        return this.http.put<User>(this.USERS_BASE_PATH, user);
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.USERS_BASE_PATH}/${id}`);
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.USERS_BASE_PATH);
    }

    getOneUser(id: number): Observable<User> {
        let params = new HttpParams();
        params.append("id", id.toString());

        return this.http.get<User>(this.USERS_BASE_PATH);
    }
}
