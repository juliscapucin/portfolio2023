import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

const STATIC_PATHS = ['/', '/work', '/about'];

export async function POST(req: NextRequest) {
   const secret = req.nextUrl.searchParams.get('secret');

   if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
   }

   try {
      const body = await req.json();
      const slug = body?.slug?.current;

      console.log('📦 Webhook payload:', JSON.stringify(body, null, 2));

      const dynamicPath = slug ? `/work/${slug}` : null;

      // Revalidate static paths
      const staticRevalidations = STATIC_PATHS.map((path) =>
         revalidatePath(path),
      );

      // Also revalidate the dynamic path (if mapped)
      const dynamicRevalidation = dynamicPath
         ? revalidatePath(dynamicPath)
         : Promise.resolve();

      await Promise.all([...staticRevalidations, dynamicRevalidation]);

      console.log(
         '✅ Revalidated paths:',
         STATIC_PATHS,
         dynamicPath ? [dynamicPath] : [],
      );
      return NextResponse.json({ revalidated: true });
   } catch (err) {
      console.error('❌ Revalidation error:', err);
      return NextResponse.json(
         { message: 'Error revalidating' },
         { status: 500 },
      );
   }
}
