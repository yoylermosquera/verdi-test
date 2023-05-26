import { Colors } from '@/styles/config/base';
import React from 'react';

import * as IconsObject from './Icons';
export type IconName = keyof typeof IconsObject;

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number;
  color?: string;
  iconName?: IconName;
  strokeWidth?: number;
}

type IconWrapperProps = IconProps & {
  iconName: IconName;
};

export const Icon = ({
  iconName = 'Metrics',
  size,
  color = Colors.blackVerdi,
  ...restProps
}: IconWrapperProps) => {
  const IconComponent = IconsObject[iconName]
  return <IconComponent {...restProps} size={size} color={color} />;
};

export default Icon;
