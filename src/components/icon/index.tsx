import React from 'react';
import { Image } from 'react-native';

import { ICONS } from '@components/icon/constants/icons';

type Props = { name: keyof typeof ICONS; height: number; width: number };

export function Icon({ name, height, width }: Props) {
  return <Image source={ICONS[name]} style={{ height, width }} />;
}
