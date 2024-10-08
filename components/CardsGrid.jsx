"use client";
import { useState } from "react";
import Section from "./Section";
import CardFilter from "./CardFilter";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Badge, badgeVariants } from "@/components/ui/badge";

const sampleCards = [
  {
    id: 1,
    title: "Card One",
    description: "This is the first sample card.",
    imageUrl: "/images/card1.jpg",
    category: "Category One",
  },
  {
    id: 2,
    title: "Card Two",
    description: "This is the second sample card.",
    imageUrl: "/images/card2.jpg",
    category: "Category Two",
  },
  {
    id: 3,
    title: "Card Three",
    description: "This is the third sample card.",
    imageUrl: "/images/card3.jpg",
    category: "Category One",
  },
  {
    id: 4,
    title: "Card Four",
    description: "This is the fourth sample card.",
    imageUrl: "/images/card4.jpg",
    category: "Category Two",
  },
  {
    id: 5,
    title: "Card Five",
    description: "This is the fifth sample card.",
    imageUrl: "/images/card5.jpg",
    category: "Category One",
  },
  {
    id: 6,
    title: "Card Six",
    description: "This is the sixth sample card.",
    imageUrl: "/images/card6.jpg",
    category: "Category Two",
  },
  {
    id: 7,
    title: "Card Seven",
    description: "This is the seventh sample card.",
    imageUrl: "/images/card7.jpg",
    category: "Category One",
  },
  {
    id: 8,
    title: "Card Eight",
    description: "This is the eighth sample card.",
    imageUrl: "/images/card8.jpg",
    category: "Category Two",
  },
  {
    id: 9,
    title: "Card Nine",
    description: "This is the ninth sample card.",
    imageUrl: "/images/card9.jpg",
    category: "Category One",
  },
];

const CardsGrid = () => {
  const [cards, setCards] = useState(sampleCards);

  const filterCards = (category) => {
    if (category === "All Categories") {
      setCards(sampleCards);
    } else {
      setCards(sampleCards.filter((card) => card.category === category));
    }
  };

  return (
    <Section padding="bottom">
      <CardFilter onFilter={filterCards} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          return (
            <Card key={card.id}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Badge variant="secondary">{card.category}</Badge>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default CardsGrid;
