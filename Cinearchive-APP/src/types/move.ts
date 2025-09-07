export type Genre =
  | "action"
  | "adventure"
  | "animation"
  | "comedy"
  | "crime"
  | "documentary"
  | "drama"
  | "family"
  | "fantasy"
  | "history"
  | "horror"
  | "music"
  | "mystery"
  | "news"
  | "reality"
  | "romance"
  | "scifi"
  | "talk"
  | "thriller"
  | "war"
  | "western";

export interface ShowGenre {
  id: Genre;
  name: string;
}

export interface ShowImageSetDetail {
  w240: string;
  w360: string;
  w480: string;
  w600?: string;
  w720?: string;
  w1080?: string;
  w1440?: string;
}

export interface ShowImageSet {
  verticalPoster: ShowImageSetDetail;
  horizontalPoster: ShowImageSetDetail;
  verticalBackdrop: ShowImageSetDetail;
  horizontalBackdrop: ShowImageSetDetail;
}

export interface StreamingOption {
  // Pode expandir conforme o retorno real da API
  [key: string]: any;
}

export interface Episode {
  itemType: string;
  title: string;
  airYear: number;
  streamingOptions: Record<string, StreamingOption[]>;
}

export interface Season {
  itemType: "season";
  title: string;
  firstAirYear: number;
  lastAirYear?: number;
  streamingOptions: Record<string, StreamingOption[]>;
  episodes?: Episode[];
}

export interface Show {
  itemType: "show";
  showType: "movie" | "series";
  id: string;
  imdbId: string;
  tmdbId: string;
  title: string;
  originalTitle: string;
  overview: string;
  releaseYear?: number;
  firstAirYear?: number;
  lastAirYear?: number;
  genres: ShowGenre[];
  directors?: string[];
  creators?: string[];
  cast: string[];
  rating: number; // 0-100
  seasonCount?: number;
  episodeCount?: number;
  imageSet: ShowImageSet;
  streamingOptions: Record<string, StreamingOption[]>;
  seasons?: Season[];
}