import { PropsWithChildren, ReactElement } from 'react';
import Head from 'next/head';
import Icon from '../icon';

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
    <div className="w-full h-screen flex flex-col md:flex-row">
      <Head>
        <title>{title}</title>
        <meta name="description" content="TEST"/>
      </Head>
      <section
        className={`
          relative
          grow ${imgClassName}
          bg-auth-hero bg-no-repeat 
          md:bg-center bg-cover
          w-full
          md:h-full
        `}
      >
        <div className="absolute top-6 md:top-10 left-[calc(50%_-_60px)]">
          <Icon iconName="VerdiLogo" size={120} />
        </div>
      </section>
      <section className={`${contentClassName} w-full md:h-full grow`}>
        {children}
      </section>
    </div>
  );
}

export function getAuthLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
}
