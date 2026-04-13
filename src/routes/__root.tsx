import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Adesso Hair & Beauty — London, Ontario" },
      { name: "description", content: "Premium hair and beauty salon in London, Ontario. Expert styling, nail care, waxing, cosmetic and facial treatments. Call (519) 686-9999." },
      { name: "author", content: "Adesso Hair & Beauty" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Adesso Hair & Beauty" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "CA-ON" },
      { name: "geo.placename", content: "London" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://adessohair.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Adesso Hair & Beauty",
          url: "https://adessohair.com",
          telephone: "+1-519-686-9999",
          address: {
            "@type": "PostalAddress",
            streetAddress: "25 Base Line Rd W",
            addressLocality: "London",
            addressRegion: "ON",
            postalCode: "N6J 1V1",
            addressCountry: "CA",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:30", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:30", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:30", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:30", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "15:00" },
          ],
          priceRange: "$$",
          description: "Premium hair and beauty salon in London, Ontario offering expert styling, nail care, waxing, cosmetic and facial treatments.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
