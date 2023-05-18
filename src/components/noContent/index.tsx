import React from 'react';
import Link from 'next/link';

import { Colors } from '@/styles/config/base';
import Icon, { IconName } from '../icon';

interface NoContentContainerProps {
  iconName?: IconName;
  title?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
  hasLink?: boolean;
  onClicklink?: () => void;
}

function NoContentContainer({
  iconName = 'SadFace',
  title = 'NO CONTENT',
  description = 'SIN CONTENIDO',
  linkText = 'Ir al inicio ',
  linkHref = '/',
  hasLink = false,
  onClicklink,
}: NoContentContainerProps) {
  return (
    <section className=" w-[12.125rem] h-[12.55rem] flex flex-col justify-between">
      <Icon
        size={56}
        iconName={iconName}
        color={Colors.goldDark}
        className="mx-auto"
      />
      <h1 className="text-center uppercase text-paragraph -mt-6">{title}</h1>
      <p className="text-center text-paragraph">{description}</p>
      {hasLink ? (
        <Link
          onClick={onClicklink}
          href={linkHref}
          className="text-center text-paragraph underline underline-offset-1 hover:cursor-pointer"
        >
          {linkText}
        </Link>
      ) : (
        <span onClick={onClicklink} className="text-center text-paragraph underline underline-offset-1 hover:cursor-pointer">
          {linkText}
        </span>
      )}
    </section>
  );
}

export default NoContentContainer;
