import Link from "next/link";
import {posts} from "../data/posts";
import * as React from "react";

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default function Home({bucket}) {
    return (
        <div className="container mx-auto py-12 px-12">
            <h1 className="text-4xl font-bold text-center">Next.js Advanced Middleware Demo</h1>

            <img alt="Only on Netlify!" src="/sticker.svg"/>

            <div className="grid grid-cols-4 gap-4 my-8">
                {posts.map((post, index) => <div key={index}
                                          className="col-span-1 border border-black-500 p-4 rounded">
                    <Link href="/static">
                        <a>
                            {(!bucket || bucket === 'a') && (
                                <h2 data-bucket="a" className="text-2xl font-bold leading-tight">{post.title.a}</h2>
                            )}
                            {(!bucket || bucket === 'b') && (
                                <h2 data-bucket="b" className="text-2xl font-bold leading-tight">{post.title.b}</h2>
                            )}
                            {(!bucket || bucket === 'original') && (
                                <h2 data-bucket="original"
                                    className="text-2xl font-bold leading-tight">{post.title.original}</h2>
                            )}
                        </a>
                    </Link>
                </div>)}
            </div>
        </div>
    );
}
