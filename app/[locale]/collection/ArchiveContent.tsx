'use client';

import { useTranslations } from 'next-intl';
import { allPieces } from '@/lib/pieces';
import { PieceCard } from '@/components/editorial/PieceCard';
import { Reveal } from '@/components/editorial/Reveal';

export function ArchiveContent() {
  const t = useTranslations('Archive');

  return (
    <main className="flex-1 pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <header className="mb-16 sm:mb-24 text-center max-w-2xl mx-auto">
            <h1 className="font-display font-light text-[44px] sm:text-[64px] md:text-[80px] leading-[1] tracking-[-0.02em] text-ink">
              {t('title')}
            </h1>
            <p className="mt-6 text-[15px] sm:text-[16px] text-ink-soft leading-[1.6]">
              {t('subtitle')}
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 sm:gap-y-20">
          {allPieces.map((piece, i) => (
            <PieceCard
              key={piece.slug}
              piece={piece}
              index={i}
              fromLabel={t('from')}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
