import type { NextRequest } from "next/server";
import {ElementHandlers, HTMLRewriter, MiddlewareRequest} from "@netlify/next";

const COOKIE_NAME = 'bucket-marketing'
const MARKETING_BUCKETS = ['original', 'a', 'b'] as const
const getBucket = () => MARKETING_BUCKETS[Math.floor(Math.random() * MARKETING_BUCKETS.length)]

export async function middleware(nextRequest: NextRequest) {
  const pathname = nextRequest.nextUrl.pathname;
  // Get the bucket cookie
  const bucket = nextRequest.cookies.get(COOKIE_NAME) || getBucket()
  const middlewareRequest = new MiddlewareRequest(nextRequest);

  if (pathname.startsWith("/static")) {
    // Unlike NextResponse.next(), MiddlewareRequest.next() actually sends the request to the origin
    // So we can grab the response and transform it!
    const response = await middlewareRequest.next();

    const message = `This was a static page but has been transformed in ${nextRequest?.geo?.city}, ${nextRequest?.geo?.country} using @netlify/next in middleware.ts! Bucket is ${bucket}.`;

    // Transform the response HTML and props
    response.replaceText("#message", message);
    response.setPageProp("message", message);
    response.setPageProp("bucket", bucket);

    // Add the bucket to cookies if it's not there
    if (!nextRequest.cookies.get(COOKIE_NAME)) {
      response.cookies.set(COOKIE_NAME, bucket)
    }

    // Remove elements from the page that isn't in the bucket
    MARKETING_BUCKETS.forEach((bucketId) => {
      if (bucketId !== bucket) {
        console.log(`Removing bucket ${bucketId} elements, we only keep ${bucket}`)
        response
            .rewriteHTML(`[data-bucket="${bucketId}"]`, {
              element(element) {
                element.remove()
              }
            })
      }
    })
    return response;
  }
}
