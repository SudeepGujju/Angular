export const authHeader = "X-Auth-Token";
export const serverHost = "localhost";
export const serverPort = 6800;
export const serverBaseURL = `http://${serverHost}:${serverPort}`;

export enum OperationModeEnum { create = 1, edit = 2, view = 3, delete = 4 };

const vidlyURLs = {
  movies: "movies",
  genres: "genres"
};

export const getVildyMoviesURL = (): string => "/" + vidlyURLs.movies;
//serverBaseURL + "/" + vidlyURLs.movies;

export const getVildyGenresURL = (): string => "/" + vidlyURLs.genres;
  //serverBaseURL + "/" + vidlyURLs.genres;

/*
export function mapErrorMsg():string{

    switch()
    {

    }
    return "";
}
*/
