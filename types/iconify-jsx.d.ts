import type { DetailedHTMLProps, HTMLAttributes } from "react";

type IconifyIconProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement> & {
    icon?: string;
    inline?: boolean | string;
    width?: string | number;
    height?: string | number;
  },
  HTMLElement
>;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": IconifyIconProps;
    }
  }
}

export {};
