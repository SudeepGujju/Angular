import { Injectable } from "@angular/core";
import { VidlyDataService } from "../vidly.data.service";
import { HttpClient } from "@angular/common/http";
import { getVildyGenresURL } from "../../common/configuration/config";
import { AuthService } from "../../common/sevices/auth.service";

@Injectable()
export class GenreService extends VidlyDataService {
  constructor(http: HttpClient, authService: AuthService) {
    super(getVildyGenresURL(), http, authService);
  }
}
