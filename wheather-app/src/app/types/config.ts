export type Config = {
    weatherApiUrl: string,
    backendBaseUrl: string,
    weatherApiToken: string,
    mapConfig: MapConfig
}

type MapConfig = {
    center: { lat: number, lng: number }
}