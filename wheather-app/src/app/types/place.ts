import { PlaceType } from "../enums/PlaceType"

export type Place = {
    name:string,
    type: PlaceType,
    address: string
}