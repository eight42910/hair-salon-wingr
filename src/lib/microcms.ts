import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from '@/types/microcms';
import type { Notice, NoticeListResponse } from '@/types/notice';
import type { BlogPost, BlogListResponse } from '@/types/blog';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// お知らせ取得
export const getNotices = async (
  queries?: MicroCMSQueries
): Promise<NoticeListResponse> => {
  return await client.get({
    endpoint: 'notices',
    queries: {
      orders: '-publishedAt',
      limit: 10,
      ...queries,
    },
  });
};

// お知らせ詳細取得
export const getNotice = async (
  contentId: string,
  queries?: MicroCMSQueries
): Promise<Notice> => {
  return await client.get({
    endpoint: '',
    contentId,
    ...(queries && { queries }),
  });
};

// 固定表示お知らせ取得
export const getPinnedNotices = async (): Promise<Notice[]> => {
  const response = await client.get({
    endpoint: 'notices',
    queries: {
      filters: 'isPinned[equals]true',
      orders: '-publishedAt',
      limit: 3,
    },
  });

  return response.contents;
};

// ブログ記事取得
export const getBlogPosts = async (
  queries?: MicroCMSQueries
): Promise<BlogListResponse> => {
  return await client.get({
    endpoint: 'blog',
    queries: {
      orders: '-publishedAt',
      limit: 10,
      ...queries,
    },
  });
};

// ブログ記事詳細取得
export const getBlogPost = async (
  contentId: string,
  queries?: MicroCMSQueries
): Promise<BlogPost> => {
  return await client.get({
    endpoint: 'blog',
    contentId,
    ...(queries && { queries }),
  });
};
