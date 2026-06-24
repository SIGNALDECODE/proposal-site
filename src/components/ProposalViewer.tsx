import Image from 'next/image';
import styles from './ProposalViewer.module.scss';

interface PageImage {
  src: string;
  alt: string;
}

interface ProposalViewerProps {
  pages: PageImage[];
}

export default function ProposalViewer({ pages }: ProposalViewerProps) {
  return (
    <div className={styles.viewer}>
      {pages.map((page, idx) => (
        <Image
          key={idx}
          className={styles.page}
          src={page.src}
          alt={page.alt}
          width={1920}
          height={2714}
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority={idx === 0}
          loading={idx === 0 ? undefined : 'lazy'}
          placeholder="empty"
        />
      ))}
    </div>
  );
}
