import { ImageResponse } from "next/og";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { OgTemplate } from "@/lib/og-template";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return new ImageResponse(
    (
      <OgTemplate
        eyebrow={post?.category ?? "Academic Insights"}
        title={post?.title ?? "Academic Experts Hub"}
        subtitle={post?.excerpt}
      />
    ),
    { ...size }
  );
}
