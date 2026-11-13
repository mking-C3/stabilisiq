import type { MetadataRoute } from "next";

// Pages on stabilisiq.com plus the two product sites that live on their own
// subdomains. Add a line here when a page is added under app/(site).

const SITE = "https://stabilisiq.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (
    path: string,
    priority: number,
    changeFrequency: "weekly" | "monthly" | "yearly" = "monthly",
  ) => ({ url: `${SITE}${path}`, lastModified: now, changeFrequency, priority });

  return [
    page("/", 1, "weekly"),
    page("/playbooks/propane", 0.8),
    page("/about", 0.7),
    page("/contact", 0.7),
    page("/sms", 0.3, "yearly"),
    page("/privacy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
    {
      url: "https://hvac.stabilisiq.com/",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://locksmith.stabilisiq.com/",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
