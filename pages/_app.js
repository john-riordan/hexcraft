import { Analytics } from "@vercel/analytics/next";
import { useEffect } from "react";
import { Router } from "next/router";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: "https://lolshop.gg/ingest",
      person_profiles: "always",
      // Enable debug mode in development
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug();
      },
    });
  }, []);

  return (
    <>
      <PostHogProvider client={posthog}>
        <Component {...pageProps} />
      </PostHogProvider>
      <Analytics />
    </>
  );
}
