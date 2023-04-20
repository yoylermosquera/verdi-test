import { PropsWithChildren, ReactElement } from 'react';
import Head from 'next/head';
import Icon from '../icon';
import { VerdiLogo } from '../icon/Icons/VerdiLogo';

type AuthLayoutProps = PropsWithChildren & {
  imgClassName?: string;
  contentClassName?: string;
  title?: string;
};

export default function AuthLayout({
  children,
  imgClassName = 'h-[45%]',
  contentClassName = 'h-[55%]',
  title
}: AuthLayoutProps) {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      <Head>
        <title>{title}</title>
        <meta name="description" content="TEST"/>
      </Head>
      <section
        className={`
          relative
          grow ${imgClassName}
          bg-auth-hero bg-no-repeat 
          lg:bg-center bg-cover
          w-full
          lg:h-full
        `}
      >
        <div className="absolute top-6 lg:top-10 left-[calc(50%_-_60px)]">
          <VerdiLogo size={120} />
        </div>
      </section>
      <section className={`${contentClassName} w-full lg:h-full grow`}>
        {children}
      </section>
    </div>
  );
}

export function getAuthLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
}
