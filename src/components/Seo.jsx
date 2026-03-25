import { Helmet } from "react-helmet-async";

export default function Seo({ title, description ,keywords,author }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
       <meta
          name="keywords"
          content={keywords}
        />

        <meta name="author" content={author} />

        {/* Open Graph (réseaux sociaux) */}
        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={description}
        />
        <meta property="og:type" content="website" />
    </Helmet>
  );
}