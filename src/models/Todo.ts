export class Todo {
  id: number;
  titel: string;
  klar: boolean;

  constructor(id: number, titel: string, klar: boolean) {
    this.id = id;
    this.titel = titel;
    this.klar = klar;
  }
}

export const startTodos: Todo[] = [
  new Todo(1, "Plocka leksaker", false),
  new Todo(2, "Äta middag", false),
  new Todo(3, "Gå på toaletten", false),
  new Todo(4, "Duscha", false),
  new Todo(5, "Borsta tänderna", false),
  new Todo(6, "Ta på pyjamas", false),
  new Todo(7, "Läsa en bok eller lyssna på en saga", false),
  new Todo(8, "Säga godnatt!", false),
];
