import { buildMetadata } from "@/lib/seo";
import IsbaClient from "./isbaClient";

export const metadata = buildMetadata({
  title: "isba.ai",
  description: "Hotel website generation platform.",
  slug: "projects/isba.ai",
});

export default function Page() {
  return <IsbaClient />;
}
