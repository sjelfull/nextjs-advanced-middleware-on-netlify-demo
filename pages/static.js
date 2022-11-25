import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const useHydrated = () => {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true)
  }, []);

  return hydrated;
}

/**
 * This file generates a static page at
 * build time using getStaticProps()
 */

export async function getStaticProps() {
  return {
    props: {
      message: "This is a static page — and a prop",
    },
  };
}

const Page = ({ message, bucket }) => {
  // const hydrated = useHydrated();
  // console.log('render! bucket is', bucket)

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Next.js Advanced Middleware Demo</h1>

        <img alt="Only on Netlify!" src="/sticker.svg" />

        <p className={styles.description}>
          <Link href="/">Learn more on the home page &rarr;</Link>
        </p>
        <h3 className={styles.title} id="message">
          {message}
        </h3>

        <div className="py-12">
          <h1 className="text-2xl font-bold leading-tight text-purple-300">A/B testing bucketed content.</h1>

          <div className="space-y-12 divide-y divide-purple-300">
            {(!bucket || bucket === 'a') && (
                <div className="py-12" data-bucket="a">
                  <h2 className="text-2xl font-bold leading-tight ">Bucket A</h2>
                  <p className="py-4 text-lg ">This is bucket A content</p>
                  <p className="py-4 text-lg ">This is bucket A content</p>
                  <p className="py-4 text-lg ">This is bucket A content</p>
                </div>
            )}
            {(!bucket || bucket === 'b') && (
            <div className="py-12" data-bucket="b">
              <h2 className="text-2xl font-bold leading-tight ">Bucket B</h2>
              <p className="py-4 text-lg ">This is bucket B content</p>
              <p className="py-4 text-lg ">This is bucket B content</p>
              <p className="py-4 text-lg ">This is bucket B content</p>
            </div>
            )}
            {(!bucket || bucket === 'original') && (
            <div className="py-12" data-bucket="original">
              <h2 className="text-2xl font-bold leading-tight text-purple-300">Bucket Original</h2>
              <p className="py-4 text-lg text-purple-300">This is bucket Original content</p>
              <p className="py-4 text-lg text-purple-300">This is bucket Original content</p>
              <p className="py-4 text-lg text-purple-300">This is bucket Original content</p>
            </div>
            )}
          </div>
        </div>

        <img className={styles.kitten} alt="An ad for a kitten" src="https://placekitten.com/400/300" />
      </main>
      <footer className={styles.footer}>
        <a href="https://ntl.fyi/3K7uewQ" target="_blank" rel="noopener noreferrer">
          <img src="/netlify.svg" alt="Netlify Logo" />
          <span>Powered by Netlify</span>
        </a>
      </footer>
    </>
  );
};

export default Page;
