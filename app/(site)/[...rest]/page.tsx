import { notFound } from "next/navigation";

// Catch-all for any address that matches no page. It exists so the 404
// renders inside the main-site layout (fonts, paper background). A
// root-level not-found.tsx sits outside that layout and loses its fonts.
export default function CatchAll() {
  notFound();
}
