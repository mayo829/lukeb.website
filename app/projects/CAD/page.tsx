import { buildMetadata } from "@/lib/seo";
import CADClient from "./CADClient";

export const metadata = buildMetadata({
  title: "CAD Design Simulation and Testing",
  description: "CAD",
  slug: "projects/CAD",
});

export default function Page() {
  return <CADClient />;
}