import type { FC, ReactNode } from 'react';

interface RenderIfProps {
  condition: boolean;
  children: ReactNode;
}

export const RenderIf: FC<RenderIfProps> = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};
