
 export const rutiner = [
  { id: 1, titel: "Plocka leksaker", klar: false },
  { id: 2, titel: "Äta middag", klar: false },
  { id: 3, titel: "Gå på toaletten", klar: false },
  { id: 4, titel: "Duscha", klar: false },
  { id: 5, titel: "Borsta tänderna", klar: false },
  { id: 6, titel: "Ta på pyjamas", klar: false },
  { id: 7, titel: "Läsa en bok eller lyssna på en saga", klar: false },
  { id: 8, titel: "Säga godnatt!", klar: false },
];

export const Kvallsrutin = () => {
  return (
    <div>
      <h2>Kvällsrutin</h2>
      <ul>
        {rutiner.map((punkt) => (
          <li key={punkt.id}>{punkt.titel}</li>
        ))}
      </ul>
    </div>
  );
};

export default Kvallsrutin;
