// src/types/EventType.ts

export enum EventType {
  Concert = "Concert",
  StreetArt = "Street Art",
  FolkMusicNight = "Folk Music Night",
  FoodFestival = "Food Festival",
  CulturalParade = "Cultural Parade",
  BookFair = "Book Fair",
  DanceShow = "Dance Show",
  FilmScreening = "Film Screening",
  Theater = "Theater",
  PhotographyContest = "Photography Contest",
  Paragliding = "Paragliding",
  HistoricalTour = "Historical Tour",
  ArtExhibition = "Art Exhibition",
  Workshop = "Workshop",
}

export const eventTypes = [
  { value: EventType.Concert, label: EventType.Concert },
  { value: EventType.StreetArt, label: EventType.StreetArt },
  { value: EventType.FolkMusicNight, label: EventType.FolkMusicNight },
  { value: EventType.FoodFestival, label: EventType.FoodFestival },
  { value: EventType.CulturalParade, label: EventType.CulturalParade },
  { value: EventType.BookFair, label: EventType.BookFair },
  { value: EventType.DanceShow, label: EventType.DanceShow },
  { value: EventType.FilmScreening, label: EventType.FilmScreening },
  { value: EventType.Theater, label: EventType.Theater },
  { value: EventType.PhotographyContest, label: EventType.PhotographyContest },
  { value: EventType.Paragliding, label: EventType.Paragliding },
  { value: EventType.HistoricalTour, label: EventType.HistoricalTour },
  { value: EventType.ArtExhibition, label: EventType.ArtExhibition },
  { value: EventType.Workshop, label: EventType.Workshop },
];
