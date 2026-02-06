import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

export function proxy(request: NextRequest) {
    // Redirect everything to /mishal
    return NextResponse.redirect(new URL('/mishal', request.url));
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - /mishal (the target page itself)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!mishal|_next/static|_next/image|favicon.ico).*)',
    ],
};
