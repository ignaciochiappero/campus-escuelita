export interface SimplePokemon {
  url: string;
  name: string;
}

export interface Respuesta {
  count: number;
  next: string;
  previous: string;
  results: SimplePokemon[];
}

export interface Pokemon {
  name: string;
  id: number;
}
