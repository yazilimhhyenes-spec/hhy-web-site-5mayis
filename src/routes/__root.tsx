import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-hhy-surface)] px-4">
      <div className="max-w-md text-center">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h2 className="mt-4 text-xl font-semibold text-[var(--color-hhy-charcoal)]">Page not found</h2>
        <p className="mt-3 text-sm text-[var(--color-hhy-muted-text)]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-hhy-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-hhy-dark)] transition-all hover:shadow-[0_4px_16px_rgba(1,208,145,0.3)]"
          >
            Go Home
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
      { title: "HHY Group — Global Private Label Food Manufacturer" },
      { name: "description", content: "HHY Group is a vertically integrated food manufacturer based in Türkiye, specializing in private label chocolate, nuts, protein bars, and snack production for global B2B partners." },
      { name: "author", content: "HHY Group" },
      { name: "keywords", content: "private label food manufacturer, contract manufacturing food, chocolate manufacturer, protein bar manufacturer, nut supplier, OEM food production" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "HHY Group" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "HHY Group — Global Private Label Food Manufacturer" },
      { name: "twitter:title", content: "HHY Group — Global Private Label Food Manufacturer" },
      { property: "og:description", content: "Vertically integrated food manufacturer — agriculture, chocolate, nuts, protein bars. Private label & OEM solutions for global B2B partners." },
      { name: "twitter:description", content: "Vertically integrated food manufacturer — agriculture, chocolate, nuts, protein bars. Private label & OEM solutions for global B2B partners." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" },
      { rel: "stylesheet", href: appCss },
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
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
