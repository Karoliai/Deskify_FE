export const FloorData = [
  {
    id: 1,
    percentage: 10,
  },
  {
    id: 2,
    percentage: 0,
  },
  {
    id: 3,
    percentage: 50,
  },
  {
    id: 4,
    percentage: 75,
  },
  {
    id: 5,
    percentage: 33,
  },
  {
    id: 6,
    percentage: 100,
  },
];

export interface TableReservationsInt {
  photo: string;
  tables: {
    State: "Free" | "Reserved" | "Any";
    id: number;
  }[];
}

export const TableReservations: TableReservationsInt = {
  photo: "https://i.imgur.com/3Z0Q3Yt.png",
  tables: [
    { State: "Free", id: 1 },
    { State: "Reserved", id: 2 },
    { State: "Free", id: 3 },
    { State: "Reserved", id: 4 },
    { State: "Reserved", id: 5 },
    { State: "Reserved", id: 6 },
    { State: "Free", id: 7 },
    { State: "Free", id: 8 },
  ],
};
