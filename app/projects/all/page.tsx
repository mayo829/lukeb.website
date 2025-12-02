import { buildMetadata } from "@/lib/seo";
import ProjectsClient from "./ProjectsClient";

export const metadata = buildMetadata({
  title: "All Projects",
  description: "Page for catelog of all projects.",
  slug: "projects/all",
});

export default function Page() {
  return <ProjectsClient />;
}
