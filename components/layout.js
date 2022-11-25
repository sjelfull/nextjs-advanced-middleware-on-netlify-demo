import Head from "next/head";
import * as React from "react";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Next.js Advanced Middleware Demo — only on Netlify</title>
                <script async src="https://cdn.tailwindcss.com"></script>
                <meta
                    name="description"
                    content="With @netlify/next, you get access to enhanced request and response features through an intuitive API. Check out the demo."
                />
                <link rel="icon" href="/favicon.ico" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@whitep4nth3r" />
                <meta name="twitter:creator" content="@whitep4nth3r" />
                <meta property="og:url" content="https://nextjs-advanced-middleware-demo.netlify.app/" />
                <meta property="og:title" content="Next.js Advanced Middleware — Only on Netlify" />
                <meta
                    property="og:description"
                    content="With @netlify/next, you get access to enhanced request and response features through an intuitive API. Check out the demo."
                />
                <meta property="og:site_name" content="nextjs-advanced-middleware-demo.netlify.app" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content="https://nextjs-advanced-middleware-demo.netlify.app/og.png" />
                <meta property="og:image:alt" content="Next.js Advanced Middleware Demo — only On Netlify" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>
            <main>{children}</main>
        </>
    )
}
