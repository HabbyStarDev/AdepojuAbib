import React, { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
}

const SEO: React.FC<SEOProps> = ({
  title = "Adepoju Abib Adekola - Full Stack Developer Portfolio",
  description = "Full Stack Software Engineer skilled in React, TypeScript, Node.js, and Django. Building scalable web applications with modern technologies.",
  keywords = "Full Stack Developer, React, TypeScript, Node.js, Django, Web Development, Portfolio",
  image = "/og-image.jpg",
  url = "https://abibadepoju.netlify.app/",
  type = "website",
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Adepoju Abib Adekola");
    updateMetaTag("robots", "index, follow");
    updateMetaTag("language", "English");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", "Adepoju Abib Adekola Portfolio", true);
    updateMetaTag("og:locale", "en_US", true);

    // Twitter tags
    updateMetaTag("twitter:card", "summary_large_image", true);
    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);
    updateMetaTag("twitter:creator", "@ojodare", true);

    // Cleanup function
    return () => {
      // Remove dynamically added meta tags if needed
      const dynamicMetaTags = document.querySelectorAll(
        'meta[data-dynamic="true"]'
      );
      dynamicMetaTags.forEach((tag) => tag.remove());
    };
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;

// import React from "react";
// import { Helmet } from "react-helmet-async";

// interface SEOProps {
//   title?: string;
//   description?: string;
//   keywords?: string;
//   image?: string;
//   url?: string;
//   type?: "website" | "article" | "profile";
// }

// const SEO: React.FC<SEOProps> = ({
//   title = "Adepoju Abib Adekola - Full Stack Developer Portfolio",
//   description = "Full Stack Software Engineer skilled in React, TypeScript, Node.js, and Django. Building scalable web applications with modern technologies.",
//   keywords = "Full Stack Developer, React, TypeScript, Node.js, Django, Web Development, Portfolio",
//   image = "/og-image.jpg",
//   url = "https://abibadepoju.netlify.app/",
//   type = "website",
// }) => {
//   return (
//     <Helmet>
//       <title>{title}</title>
//       <meta name='description' content={description} />
//       <meta name='keywords' content={keywords} />
//       <meta name='author' content='Adepoju Abib Adekola' />
//       <meta name='robots' content='index, follow' />
//       <meta name='language' content='English' />

//       {/* Open Graph */}
//       <meta property='og:title' content={title} />
//       <meta property='og:description' content={description} />
//       <meta property='og:url' content={url} />
//       <meta property='og:type' content={type} />
//       <meta property='og:image' content={image} />
//       <meta property='og:site_name' content='Adepoju Abib Adekola Portfolio' />
//       <meta property='og:locale' content='en_US' />

//       {/* Twitter Card */}
//       <meta property='twitter:card' content='summary_large_image' />
//       <meta property='twitter:title' content={title} />
//       <meta property='twitter:description' content={description} />
//       <meta property='twitter:image' content={image} />
//       <meta property='twitter:creator' content='@ojodare' />
//     </Helmet>
//   );
// };

// export default SEO;
