import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>DTFest 2024</title>
        <meta
          name="description"
          content="DT Fest 2024 is a vibrant celebration of Nepali culture, featuring a mix of vendors, artisans, musicians, and dancers. Attendees can enjoy traditional dances, live performances, and authentic Nepalese products, art, and cuisine."
        />
        <meta
          name="keywords"
          content="dtfest, nepal, nepali culture, dashain america, festivals, tihar, dashain tihar fest, dashain tihar america, nepali events, dashain tihar dhamaka, dashain 2024, nepali dashain"
        />
        <meta name="robots" content="index, follow" />
        <meta name="organization" content="DTFest" />

        <meta property="og:title" content="DTFest 2024" />
        <meta
          property="og:description"
          content="DT Fest 2024 is a vibrant celebration of Nepali culture, featuring a mix of vendors, artisans, musicians, and dancers. Attendees can enjoy traditional dances, live performances, and authentic Nepalese products, art, and cuisine."
        />
        <meta property="og:image" content="../public/dtfest_logo.png" />
        <meta
          property="og:url"
          content="https://main.d83nwks9nu6cc.amplifyapp.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DTFest 2024" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DTFest 2024" />
        <meta
          name="twitter:description"
          content="DT Fest 2024 is a vibrant celebration of Nepali culture, featuring a mix of vendors, artisans, musicians, and dancers. Attendees can enjoy traditional dances, live performances, and authentic Nepalese products, art, and cuisine."
        />
        <meta name="twitter:image" content="../public/dtfest_logo.png" />
        <meta
          name="twitter:url"
          content="https://main.d83nwks9nu6cc.amplifyapp.com/"
        />
        <meta name="twitter:site" content="@dtfest" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="canonical"
          content="https://main.d83nwks9nu6cc.amplifyapp.com/"
        />

        <link
          rel="icon"
          href="/dtfest_logo.png"
          type="../public/dtfest_logo.png"
        />
        <link rel="apple-touch-icon" href="../public/dtfest_logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
