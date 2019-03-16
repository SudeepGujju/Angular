import { Injectable } from "@angular/core";
import { VidlyDataService } from "../vidly.data.service";
import { HttpClient } from "@angular/common/http";
import { getVildyMoviesURL } from "src/app/common/configuration/config";
import { AuthService } from "src/app/common/sevices/auth.service";

@Injectable()
export class MovieService extends VidlyDataService {
  constructor(http: HttpClient, authService: AuthService) {
    super(getVildyMoviesURL(), http, authService);
  }
}
