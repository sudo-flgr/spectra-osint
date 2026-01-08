import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://spectra-osint.org",
            lastModified: new Date(),
        },
        {
            url: "https://spectra-osint.org/ferramentas/retificacao",
            lastModified: new Date(),
        },
        {
            url: "https://spectra-osint.org/manifesto",
            lastModified: new Date(),
        },
    ];
}
