import { revalidatePath } from 'next/cache';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');
  const path = searchParams.get('path');

  if (token !== process.env.REVALIDATE_SECRET || !path) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    await revalidatePath(path);
    return new Response('Revalidated', { status: 200 });
  } catch {
    return new Response('Error', { status: 500 });
  }
}
