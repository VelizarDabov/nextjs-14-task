
export interface CardData {
  title: string;
  image: string;
  description: string;
}

export const cardsData: CardData[] = [
  {
    title: "Brief",
    image: "/research.png",
    description:
      "Complete brief writing or simple guidance on what to include, we've got you covered.",
  },
  {
    title: "Search",
    image: "/presentation.png",
    description:
      "In-depth agency search covering; criteria matching, door knocking and due-diligence vetting.",
  },
  {
    title: "Pitch",
    image: "/brainstorming.png",
    description:
      "Comprehensive pitch management, including comms, diary management and pitch hosting.",
  },
];
