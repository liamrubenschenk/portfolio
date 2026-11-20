import { client } from "./sanity/client";
import { sanityQuery } from "./sanity/queries";

import About from "./components/about";
import Projects from "./components/projects";

export default async function Page() {
  const fetchOptions = { next: { revalidate: 3600 } };

  const { about, projects } = await client.fetch(sanityQuery, {}, fetchOptions);

  return (
    <main>
      <About about={about} />
      <Projects projects={projects} />
    </main>
  );
}
