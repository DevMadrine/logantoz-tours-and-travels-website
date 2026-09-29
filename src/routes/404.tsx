import NotFound from "~/components/NotFound";

/** Prerendered as /404.html for static hosting. Netlify serves it for unknown paths. */
export default function NotFoundPage() {
  return <NotFound />;
}
