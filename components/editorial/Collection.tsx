"use client";

import React from 'react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

type PieceMeta = {
  slug: string;
  key: string;
  imgClass: string;
  imgSrc: string;
  size: 'large' | 'medium' | 'small';
  beamHost?: boolean;
  beamDelay?: string;
};

// Unsplash photo IDs for each rug — swap to exact match as needed
const pieceMeta: PieceMeta[] = [
  { slug: 'khwab', key: 'khwab', imgClass: 'piece-1', imgSrc: 'https://images.unsplash.com/photo-1646092646542-6404620730d2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', size: 'large', beamHost: true, beamDelay: '0s' },
  { slug: 'saanjh', key: 'saanjh', imgClass: 'piece-2', imgSrc: 'https://plus.unsplash.com/premium_photo-1725295198378-d286934e2735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', size: 'small' },
  { slug: 'mehfil', key: 'mehfil', imgClass: 'piece-3', imgSrc: 'https://i.pinimg.com/control1/1200x/4e/a0/19/4ea0194e7d0368f5dd2e55f1a7a9f2d0.jpg', size: 'small', beamHost: true, beamDelay: '-6s' },
  { slug: 'shubh', key: 'shubh', imgClass: 'piece-4', imgSrc: 'https://i.pinimg.com/control1/1200x/09/ca/d9/09cad9ad83b39168c90d553d2e1799af.jpg', size: 'large', beamHost: true, beamDelay: '-12s' },
  { slug: 'naqsh', key: 'naqsh', imgClass: 'piece-5', imgSrc: 'https://i.pinimg.com/control1/1200x/bf/5a/af/bf5aaf5fea0f06788efd5bbac90e6390.jpg', size: 'medium' },
  { slug: 'aaraam', key: 'aaraam', imgClass: 'piece-6', imgSrc: 'https://i.pinimg.com/control1/736x/a3/7c/37/a37c3780cd35cff13b35d2573b32a983.jpg', size: 'medium' },
];

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as any },
  }),
};

export function Collection() {
  const t = useTranslations('Collection');

  return (
    <section className="collection" id="collection" aria-labelledby="collection-heading">
      <div className="container">
        <div className="header">
          <motion.span
            className="label"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
          >
            {t('label')}
          </motion.span>
          <motion.h2
            id="collection-heading"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.15}
          >
            {t('headline')}
          </motion.h2>
          <motion.div
            className="view-all"
            style={{ fontSize: '13px' }}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.3}
          >
            <Link href="/collection" className="link">
              {t('viewAll')}
            </Link>
          </motion.div>
        </div>

        <div className="collection-grid">
          {pieceMeta.map((piece, i) => {
            const name = t(`${piece.key}Name`);
            const desc = t(`${piece.key}Desc`);
            const price = t(`${piece.key}Price`);
            return (
              <motion.article
                key={piece.slug}
                className={`piece ${piece.size}`}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: (i % 2) * 0.15, ease: [0.16, 1, 0.3, 1] as any }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link
                  href={`/collection/${piece.slug}`}
                  aria-label={`${name} — ${desc}`}
                  className="block"
                >
                  <motion.div
                    className={`piece-img ${piece.imgClass} ${piece.beamHost ? 'beam-host' : ''}`}
                    style={{ ...(piece.beamDelay ? { '--beam-delay': piece.beamDelay } as React.CSSProperties : {}), position: 'relative', overflow: 'hidden' }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
                  >
                    <img
                      src={piece.imgSrc}
                      alt={`${name} — ${desc}`}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </motion.div>
                </Link>
                <h2 className="piece-name">{name}</h2>
                <p>{desc}</p>
                <div className="price-line">
                  <span className="from">{price}</span>
                  <Link href={`/collection/${piece.slug}`} className="link">
                    {t('viewPiece')}
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
