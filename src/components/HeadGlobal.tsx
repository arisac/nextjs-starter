import Head from 'next/head'
import { site } from 'siteConfig'

export default function HeadGlobal() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />

      <meta name="apple-mobile-web-app-title" content={site.name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content={site.name} />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content={site.themeColor} />

      <link rel="apple-touch-icon" href={site.image} />
      <link rel="icon" type="image/png" sizes="512x512" href={site.image} />

      <link rel="icon" href={site.favicon} />

      {/* <link rel="manifest" href="/manifest.json" /> */}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:url" content={site.url} />
      <meta property="og:image" content={site.image} />

      <meta name="description" content={site.description} />
      <meta name="keywords" content={site.keywords} />
      <title>{site.title}</title>
    </Head>
  )
}
