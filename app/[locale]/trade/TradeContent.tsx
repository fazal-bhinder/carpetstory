'use client';

import { useTranslations } from 'next-intl';
import { SlideIn } from '@/components/editorial/SlideIn';
import { MagneticLink } from '@/components/editorial/MagneticLink';

const h1 = 'font-display font-light text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] text-ink mb-12';
const h2 = 'font-display font-light text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-ink mt-20 mb-8';
const h3 = 'font-display font-light text-[24px] md:text-[28px] leading-[1.2] tracking-[-0.01em] text-ink mt-12 mb-6';
const p = 'body-lg text-ink-soft mb-8 max-w-3xl';
const ul = 'list-disc list-inside body-lg text-ink-soft mb-8 space-y-3 max-w-3xl';
const blockquoteCls = 'border-l border-ink/20 pl-6 my-10 italic text-ink/80 text-[20px] max-w-2xl font-display';
const hrCls = 'my-16 border-ink-faint';

export function TradeContent() {
  const t = useTranslations('Trade');

  const benefits = [
    { title: t('benefit1Title'), body: t('benefit1Body') },
    { title: t('benefit2Title'), body: t('benefit2Body') },
    { title: t('benefit3Title'), body: t('benefit3Body') },
    { title: t('benefit4Title'), body: t('benefit4Body') },
    { title: t('benefit5Title'), body: t('benefit5Body') },
  ];

  return (
    <div>
      <h1 className={h1}>{t('title')}</h1>
      <p className={p}>{t('intro1')}</p>
      <p className={p}>{t('intro2')}</p>

      <hr className={hrCls} />

      <h2 className={h2}>{t('benefitsHeading')}</h2>
      <p className={p}>{t('benefitsLead')}</p>
      <ul className={ul}>
        {benefits.map((b) => (
          <li key={b.title}>
            <strong className="font-medium text-ink">{b.title}</strong>: {b.body}
          </li>
        ))}
      </ul>

      <h2 className={h2}>{t('processHeading')}</h2>

      <SlideIn direction="u">
        <h3 className={h3}>{t('step1Title')}</h3>
        <p className={p}>{t('step1Body')}</p>
      </SlideIn>

      <SlideIn direction="u" delay={100}>
        <h3 className={h3}>{t('step2Title')}</h3>
        <p className={p}>{t('step2Body')}</p>
      </SlideIn>

      <SlideIn direction="u" delay={200}>
        <h3 className={h3}>{t('step3Title')}</h3>
        <p className={p}>{t('step3Body')}</p>
      </SlideIn>

      <hr className={hrCls} />

      <blockquote className={blockquoteCls}>
        <p className="mb-2">&ldquo;{t('quote')}&rdquo;</p>
        <p className="text-[15px] not-italic text-ink-soft">
          — <em>{t('quoteAuthor')}</em>
        </p>
      </blockquote>

      <h2 className={h2}>{t('openAccountHeading')}</h2>
      <p className={p}>{t('openAccountBody')}</p>

      <div className="mt-8">
        <MagneticLink
          href="mailto:trade@carpetstory.com"
          className="inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.16em] font-medium text-accent hover:text-accent-soft transition-colors link always"
        >
          {t('applyCta')}
          <span className="w-6 h-[1px] bg-current" />
        </MagneticLink>
      </div>
    </div>
  );
}
