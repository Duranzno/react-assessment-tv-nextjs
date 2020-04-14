export interface Schedule {
  id?: number;
  url?: string;
  name?: string;
  season?: number;
  number?: number | null;
  airdate?: Date;
  airtime?: string;
  airstamp?: Date;
  runtime?: number;
  image?: null;
  summary?: null | string;
  show?: Show;
  links?: ScheduleLinks;
}

export interface ScheduleLinks {
  self?: Self;
}

export interface Self {
  href?: string;
}

export interface Show {
  id?: number;
  url?: string;
  name?: string;
  type?: string;
  language?: string;
  genres?: string[];
  status?: string;
  runtime?: number;
  premiered?: Date;
  officialSite?: null | string;
  schedule?: ScheduleClass;
  rating?: Rating;
  weight?: number;
  network?: Network;
  webChannel?: Network | null;
  externals?: Externals;
  image?: Image | null;
  summary?: string;
  updated?: number;
  links?: ShowLinks;
}

export interface Externals {
  tvrage?: number | null;
  thetvdb?: number | null;
  imdb?: null | string;
}

export interface Image {
  medium?: string;
  original?: string;
}

export interface ShowLinks {
  self?: Self;
  previousepisode?: Self;
  nextepisode?: Self;
}

export interface Network {
  id?: number;
  name?: string;
  country?: Country | null;
}

export interface Country {
  name?: string;
  code?: string;
  timezone?: string;
}

export interface Rating {
  average?: number | null;
}

export interface ScheduleClass {
  time?: string;
  days?: string[];
}
