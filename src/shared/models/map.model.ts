export interface MapProps {
  territories: TerritoryType[]
}

export type TerritoryType = {
  id: number;
  name: string;
  polylines: {lat: number, lng: number}[][];
  last_worked_date: string;
  last_given_date: string;
}
