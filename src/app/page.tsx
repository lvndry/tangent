import { baseURL } from "@/resources";
import { getContent } from "@/resources/content";
import { Meta } from "@once-ui-system/core";
import { HomeClient } from "./HomeClient";

export async function generateMetadata() {
  const content = getContent("en");
  return Meta.generate({
    title: content.home.title,
    description: content.home.description,
    baseURL: baseURL,
    path: content.home.path,
    image: content.home.image,
  });
}

export default function Home() {
  return <HomeClient />;
}
