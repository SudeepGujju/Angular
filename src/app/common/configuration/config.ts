export const authHeader = "X-Auth-Token";
export const serverHost = "localhost";
export const serverPort = 6800;
export const serverBaseURL = `http://${serverHost}:${serverPort}`;
export const apiBaseURL = '/api';

export enum OperationModeEnum { create = 1, edit = 2, view = 3, delete = 4 };

const appURls = {
  auth: "/auth"
};

const vidlyURLs = {
  genres: "/genres",
  movies: "/movies",
  users: "/users",
};

export const getAuthURL = (): string => serverBaseURL + apiBaseURL + appURls.auth;

export const getVildyGenresURL = (): string => serverBaseURL + apiBaseURL + vidlyURLs.genres;
//serverBaseURL + "/" + vidlyURLs.genres;

export const getVildyMoviesURL = (): string => serverBaseURL + apiBaseURL + vidlyURLs.movies;
//serverBaseURL + "/" + vidlyURLs.movies;

export const getVildyUsersURL = (): string => apiBaseURL + vidlyURLs.users;

/*
export function mapErrorMsg():string{

    switch()
    {

    }
    return "";
}
*/
