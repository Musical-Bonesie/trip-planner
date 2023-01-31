export type PlacesToVisitObjectType = {
  locationName: string;
  details?: string;
  src?: string;
  lat: number;
  lng: number;
};

export type TripInfoDataType = {
  [key: string]: {
    notes?: string;
    placesToVisit: PlacesToVisitObjectType[];
  };
};

export type placesStateCoorType = {
  [key: string]: number[][];
};
