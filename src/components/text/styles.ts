import styled from 'styled-components/native';

import { Props } from './index';

export const Text = styled.Text<Props>`
  ${({ theme, size, bold, color }) => ({
    fontSize: size ? theme.fontSize[size] : theme.fontSize.md,
    fontFamily: theme.fontFamily[bold ? 'bold' : 'regular'],
    color: color ? theme.color[color] : theme.color.black,
  })}
`;
