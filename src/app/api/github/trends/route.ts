import { NextResponse } from 'next/server';
import { githubService } from '@/lib/github';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const username = process.env.GITHUB_USERNAME;
    if (!username) {
      return NextResponse.json({ error: 'GitHub username not configured' }, { status: 400 });
    }

    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const perPage = 6;

    const date = new Date();
    date.setDate(date.getDate() - 7);
    const formattedDate = date.toISOString().split('T')[0];

    const response = await githubService.octokit.search.repos({
      q: `created:>${formattedDate}`,
      sort: 'stars',
      order: 'desc',
      per_page: perPage,
      page: page
    });

    return NextResponse.json(response.data.items);
  } catch (error) {
    console.error('Error in /api/github/trends:', error);
    return NextResponse.json({ error: 'Failed to fetch trends' }, { status: 500 });
  }
}
