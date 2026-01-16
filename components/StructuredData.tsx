import Script from "next/script";

export default function StructuredData() {
  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kenenisa Mekonnen",
          url: "https://yourdomain.com",
          jobTitle: "Full-Stack Developer",
          sameAs: [
            "https://github.com/kenenisamekonnensori",
            "https://www.linkedin.com/in/kenenisamekonnen",
            "https://x.com/kenenisa1153",
          ],
        }),
      }}
    />
  );
}
