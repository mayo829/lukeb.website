import { buildMetadata } from "@/lib/seo";
import DocumentsClient from "./DocumentsClient";

export const metadata = buildMetadata({
  title: "470 Project",
  description: "Final project for EECS 470 at umich.",
  slug: "projects/470_project",
});

export default function Page() {
  return <DocumentsClient />;
}