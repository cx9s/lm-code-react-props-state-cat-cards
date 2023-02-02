interface Pet {
  name: string;
  species: string;
  favFoods: string[];
  birthYear: number;
}

export interface Cat extends Pet {
  petType: "Cat";
}

export interface Dog extends Pet {
  petType: "Dog";
}
