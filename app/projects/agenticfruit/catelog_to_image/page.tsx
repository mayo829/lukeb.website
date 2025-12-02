import { buildMetadata } from "@/lib/seo";
import CatalogClient from "./CatalogClient";

export const metadata = buildMetadata({
  title: "Product Catelog To Image Converter",
  description: "Converts product catelogs to studio-grade images.",
  slug: "projects/agenticfruit/catelog_to_image",
});

export default function Page() {
  return <CatalogClient />;
}
