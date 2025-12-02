// lib/seo.ts
export function buildMetadata({
  title,
  description,
  image = "/circuit_purple.jpg",
  slug,
}: {
  title: string;
  description: string;
  image?: string;
  slug: string;
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      url: `https://lukeb.vercel.app/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
