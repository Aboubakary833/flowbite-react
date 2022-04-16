import { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';

export type TabProps = PropsWithChildren<{
  title: ReactNode;
  active?: boolean;
  disabled?: boolean;
  icon?: FC<ComponentProps<'svg'>>;
  className?: string;
}>;

export const Tab: FC<TabProps> = ({ children }) => <>{children}</>;
