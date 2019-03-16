import { Injectable } from "@angular/core";
import { DataService } from "../common/sevices/data-service";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../common/sevices/auth.service";

@Injectable()
export class StudentsService extends DataService {
  constructor(http: HttpClient, authService: AuthService) {
    super("http://localhost:7200/Students", http, true, authService);
  }
}
