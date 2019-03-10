export interface LatitudeAndLongitude {
    latitude?: string;
    longitude?: string;
}

export interface BasicForecast {
    temperature: number;
    precipitation: number;
    coordinates?: LatitudeAndLongitude;
}