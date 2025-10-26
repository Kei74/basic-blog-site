import fs from "fs";
import { Meta, Meta as MetaType } from "@/types/meta";
import React from "react";

export function getSlugs() {
  const files = fs.readdirSync(process.cwd() + "/src/posts");
  const slugs = files.map(file => (file.replace(".mdx", "")));
  return slugs;
}

export async function getPostTitles(): Promise<{ slug: string, title: string, date: Date }[]> {
    const slugs = getSlugs();
    const posts = await Promise.all(slugs.map(async (currentSlug) => {
        const { meta }: { meta: Meta } = await import(`@/posts/${currentSlug}.mdx`);
        return { slug: currentSlug, title: meta.title, date: meta.date};
    }));
    posts.sort((p1, p2) => (p1.date > p2.date)? 1 : -1);
    return posts;
}

export async function getPost(slug: string): Promise<{ meta: MetaType; Post: React.FC; }> {
  const { meta, default: Post } = await import(`@/posts/${slug}.mdx`);
  if(!meta.image) meta.image = null;
  return { meta, Post } as { meta: MetaType, Post: React.FC };
}