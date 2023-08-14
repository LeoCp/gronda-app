import React from 'react';
import { TextProps } from 'react-native';

import { theme } from '@utils/theme';

import * as S from './styles';

export interface Props extends TextProps {
  size?: keyof typeof theme.fontSize;
  color?: keyof typeof theme.color;
  children: React.ReactNode;
  bold?: boolean;
}

export function Text({ size, bold, color, children, ...props }: Props) {
  return (
    <S.Text size={size} color={color} bold={bold} {...props}>
      {children}
    </S.Text>
  );
}
