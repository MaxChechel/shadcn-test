import Image from "next/image";
import NavigationMenuDemo from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
async function getData() {
  const query = `*[_type == "post"] | order(_createdAt asc) { _id, title, image, "currentSlug": slug.current }`;

  const data = await client.fetch(query);
  return data;
}
export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <NavigationMenuDemo />
      <Hero />
      <Section padding="bottom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((card) => {
            return (
              <Card key={card.id}>
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={urlFor(card.image).url()}
                    alt={card.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
