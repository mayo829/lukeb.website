import { MetadataRoute } from "next";
import { readdir } from "fs/promises";
import { join } from "path";
import { Dirent } from "fs";

// TODO: replace this with DB/API fetch later
async function getProjectSlugs(): Promise<string[]> {
  // Auto-detect slugs from your `app/projects` folder
  // (FS is only available during build)
  try {
    const projectPath = join(process.cwd(), "app/projects");
    const entries = await readdir(projectPath, { withFileTypes: true });

    return entries
      .filter((entry: Dirent) => entry.isDirectory())
      .map((dir: Dirent) => dir.name);
  } catch (error) {
    // If projects directory doesn't exist or can't be read, return empty array
    console.warn("Could not read projects directory:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://lukeb.vercel.app";
  const now = new Date();

  const projectSlugs = await getProjectSlugs();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/all`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Add individual project pages
  const projectRoutes: MetadataRoute.Sitemap = projectSlugs.map((slug: string) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes];
}
