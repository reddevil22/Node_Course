export interface LatitudeAndLongitude {
    latitude?: string;
    longitude?: string;
    location?: string;
}

export interface BasicForecast {
    temperature: number;
    precipitation: number;
    location?: string;
}