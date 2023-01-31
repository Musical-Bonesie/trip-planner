export type PlacesToVisitObjectType = {
  locationName: string;
  details?: string;
  src?: string;
  lat: number;
  lng: number;
};

export type tripInfoDataType = {
  [key: string]: {
    notes?: string;
    placesToVisit: PlacesToVisitObjectType[];
  };
};

export type placesStateCoorType = {
  [key: string]: number[][];
};
