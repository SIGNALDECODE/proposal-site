import type { Metadata } from 'next';
import Script from 'next/script';
import '../../assets/styles/main.scss';

export const metadata: Metadata = {
  title: '시그널디코드 제안서',
  description: '시그널디코드 제안서',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body>
        {children}
        <Script id="load-pretendard" strategy="afterInteractive">
          {`
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
          `}
        </Script>
      </body>
    </html>
  );
}
