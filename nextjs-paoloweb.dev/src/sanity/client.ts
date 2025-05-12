import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ud8el16p",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});