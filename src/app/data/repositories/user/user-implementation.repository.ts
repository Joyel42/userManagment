import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './entities/user-entity';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { UserRepository } from 'src/app/domain/repositories/user.repository';
import { UserModel } from 'src/app/domain/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  private apiUrl = 'http://localhost:5000';

  login(params: { username: string, password: string }): Observable<UserModel> {
    return this.http
      .post<UserEntity>(`${this.apiUrl}/login`, params)
      .pipe(map(this.userMapper.mapFrom));
  }

  register(params: { phoneNum: string, password: string }): Observable<UserModel> {
    return this.http
      .post<UserEntity>(`${this.apiUrl}/register`, params)
      .pipe(map(this.userMapper.mapFrom));
  }

  getUserProfile(): Observable<UserModel> {
    return this.http.get<UserEntity>(`${this.apiUrl}/user`).pipe(
      map(this.userMapper.mapFrom));
  }
}