
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Metadata } from "next"
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function GenerateMetadata({
    title = 'NoFlex',
    description = 'Watch Movies for Free.',
    image = '/logo.png',
    icons = '/logo.png',
  }: {
    title?: string
    description?: string
    image?: string
    icons?: string
  } = {}): Metadata {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [{ url: image }],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image],
        creator: 'Nitesh',
      },
      icons,
     // metadataBase: new URL("https://casecobra.vercel.app/")
    }
  }
  
  // TMDB API KEY
const API_KEY = process.env.NEXT_PUBLIC_API_KEY



console.log("line 48")

export const request = {
	fetchTrending: `/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
	fetchRomanceMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749`,
	fetchActionMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=28`,
	fetchWarMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10752`,
	fetchComedyMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=27`,
	fetchCrimeMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=80`,
	fetchDocumentariesMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=99`,
	fetchAdventureMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=12`,
	fetchDramaMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=18`,
	fetchMysteryMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=9648`,
	fetchAnimationMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=16`,
	fetchWesternMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=37`,
	fetchFamilyMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10751`,
	fetchHistoryMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=36`,
	fetchMusicMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10402`,
	fetchFantasyMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=14`,
	fetchScienceFictionMovies: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=878`,
}

// this is what is happening for each request
// https://api.themoviedb.org/3/trending/all/week?api_key=92bcc12799d8068995c7c9650f414f3e&language=en-US

// https://api.themoviedb.org/3/discover/movie?api_key=92bcc12799d8068995c7c9650f414f3e&with_genres=28

// https://api.themoviedb.org/3/movie/top_rated?api_key=92bcc12799d8068995c7c9650f414f3e&language=en-US

  //https://api.themoviedb.org/3/movie/550?api_key=3c3fdb39a07e8467830fbbe303edcd6d


 export const axiosInstance=axios.create({
    baseURL: 'https://api.themoviedb.org/3',
  });

interface Video_Types{

    "videos":{
    "results": [
      {
        "iso_639_1": string,
        "iso_3166_1": string,
        "name": string,
        "key": string,
        "site": string,
        "size": number,
        "type": string,
        "official": boolean,
        "published_at":string,
        "id": string
      },
    ]
  }
    }


    export async function  MovieTrailer(id:string):Promise<{
      iso_639_1: string;
      iso_3166_1: string;
      name: string;
      key: string;
      site: string;
      size: number;
      type: string;
      official: boolean;
      published_at: string;
      id: string}>{

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
}
}

const d=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos`, options)
  const res:Video_Types=await d.json();
  console.log("dataa aaya")
  console.log(res.videos.results)
  let flag=-1
  res.videos.results.map((e,idx)=>{
    if(e.type==="Trailer")  flag=idx;
  })
  if(flag==-1){
    res.videos.results.map((e,idx)=>{
      if(e.type==="Teaser")  flag=idx;
    }) 
  }
  return res.videos.results[flag]
  }