import styles from './ProposalViewer.module.scss';

interface PageImage {
  src: string;
  alt: string;
}

interface ProposalViewerProps {
  pages: PageImage[];
}

function optimizeSupabaseImage(src: string): string {
  if (!src.includes('supabase.co')) return src;
  const optimized = src.replace('/object/public/', '/render/image/public/');
  return `${optimized}?width=1920&quality=80&format=webp`;
}

export default function ProposalViewer({ pages }: ProposalViewerProps) {
  return (
    <div className={styles.viewer}>
      {pages.map((page, idx) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={idx}
          className={styles.page}
          src={optimizeSupabaseImage(page.src)}
          alt={page.alt}
          loading={idx === 0 ? 'eager' : 'lazy'}
        />
      ))}
    </div>
  );
}
