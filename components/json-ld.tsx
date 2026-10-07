/**
 * JSON-LD renderer. Values are serialised with `<` escaped to its unicode
 * equivalent to keep the script block inert (see Next.js JSON-LD guidance).
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
