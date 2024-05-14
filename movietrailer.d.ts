declare module "movie-trailer"{
    interface Options {
        id?: boolean;
    }

    function movieTrailer(movie: string|null,id:{ tmdbId:number },obj?:{year: string, multi: boolean} ,options?: Options): Promise<string | undefined>;

    export = movieTrailer;
}