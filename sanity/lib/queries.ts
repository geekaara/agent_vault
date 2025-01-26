import { defineQuery } from "next-sanity";

export const AGENTS_QUERY =
  defineQuery(`*[_type == "agent" && defined(slug.current)] | order(_createdAt desc) {
  _id, title, slug, _createdAt, owner -> { _id, name, image, bio}, views, description, category, image
}`);
