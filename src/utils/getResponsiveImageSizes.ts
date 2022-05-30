import { Breakpoints } from '@/types';

const getResponsiveImageSizes = (size: string, responsive?: Breakpoints): string => {
  let sizes = '';

  if (responsive) {
    for (const key of Object.keys(responsive).reverse()) {
      let value = (responsive as any)[key];

      if (!value) continue;

      switch (key) {
        case 'sm':
          sizes += `(min-width: 640px) ${value},`;

          break;
        case 'md':
          sizes += `(min-width: 768px) ${value},`;

          break;
        case 'lg':
          sizes += `(min-width: 1024px) ${value},`;

          break;
        case 'xl':
          sizes += `(min-width: 1280px) ${value},`;

          break;
        case 'xxl':
          sizes += `(min-width: 1536px) ${value},`;

          break;
      }
    }
  }

  sizes += size;

  return sizes;
};

export { getResponsiveImageSizes };
