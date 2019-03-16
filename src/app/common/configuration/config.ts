export const authHeader = "X-Auth-Token";
export const serverHost = "localhost";
export const serverPort = 6800;
export const serverBaseURL = `http://${serverHost}:${serverPort}`;

const vidlyURLs = {
  movies: "movies",
  genres: "genres"
};

export const getVildyMoviesURL = (): string =>
  serverBaseURL + "/" + vidlyURLs.movies;

export const getVildyGenresURL = (): string =>
  serverBaseURL + "/" + vidlyURLs.genres;

/*
export function mapErrorMsg():string{

    switch()
    {

    }
    return "";
}
*/
