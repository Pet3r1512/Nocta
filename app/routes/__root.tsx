import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  useRouter,
} from "@tanstack/react-router";
import * as React from "react";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import BottomNavbarContainer from "~/components/Layout/BottomNavbar/BottomNavbarContainer";
import Header from "~/components/Layout/Header";
import { NotFound } from "~/components/NotFound";
import appCss from "~/styles/app.css?url";
import { seo } from "~/utils/seo";
import { ClerkProvider } from "@clerk/tanstack-react-start";
// import { useTheme } from "~/hooks/useTheme";
// import { dark } from "@clerk/themes";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title: "Nocta | Sleep Tracker & Monitor",
        description: `Nocta is a comprehensive sleep tracker and monitor designed to help you improve your sleep quality and overall health.`,
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const route = useRouter();
  // const { theme } = useTheme();
  return (
    <ClerkProvider
    // appearance={{
    //   baseTheme: theme === "dark" ? dark : undefined,
    // }}
    >
      <html>
        <head>
          <HeadContent />
        </head>
        <body className="relative lg:space-y-10 bg-white dark:bg-background-dark dark:text-white text-black">
          {/* Header here */}
          <Header />
          {children}
          <BottomNavbarContainer pathname={route.latestLocation.pathname} />
          {/* <TanStackRouterDevtools position="bottom-right" /> */}
          <Scripts />
        </body>
      </html>
    </ClerkProvider>
  );
}
