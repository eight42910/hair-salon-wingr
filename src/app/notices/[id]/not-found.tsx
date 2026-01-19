import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SectionTitle } from '@/components/ui/SectionTitle';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen pt-20 bg-bg">
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle
            mainTitle="お知らせが見つかりません"
            subTitle="404 Not Found"
            description="お探しのお知らせは存在しないか、削除された可能性があります"
          />

          <div className="max-w-md mx-auto">
            <div className="bg-surface rounded-2xl p-8 mb-8 border border-border shadow-sm">
              <div className="text-6xl text-muted mb-4">📋</div>
              <h2 className="text-xl font-semibold text-text mb-4">
                お知らせが見つかりません
              </h2>
              <p className="text-muted text-sm mb-6 leading-relaxed">
                お探しのお知らせは存在しないか、既に削除されている可能性があります。
                <br />
                URLをご確認いただくか、お知らせ一覧から最新の情報をご覧ください。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/notices">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  お知らせ一覧へ
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  トップページへ
                </Button>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted text-sm mb-2">
                お困りの際はお気軽にお問い合わせください
              </p>
              <Link href="/contact">
                <Button variant="outline" size="sm">
                  お問い合わせ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
