import React from 'react';

import * as IconsObject from './Icons';
export type IconName = keyof typeof IconsObject;

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number;
  color?: string;
  iconName?: IconName;
}

type IconWrapperProps = IconProps & {
  iconName: IconName;
};

export const Icon = ({
  iconName = 'Metrics',
  size = 16,
  color = 'black',
  ...restProps
}: IconWrapperProps) => {
  const IconComponent = IconsObject[iconName];
  return <IconComponent {...restProps} size={size} color={color} />;
};

export default Icon;
