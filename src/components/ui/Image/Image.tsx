// import React from 'react';
// import NextImage from 'next/image';
// import { useNextSanityImage } from 'next-sanity-image';
// import { Image as SanityImage } from '@sanity/types';
//
// import { sanityClient } from '@/lib/sanity';
//
// type Layout = 'fixed' | 'fill' | 'intrinsic' | 'responsive' | undefined;
//
// type ImageProps = {
//   image: SanityImage;
//   alt: string;
//   quality?: number;
//   sizes?: string;
//   layout?: Layout;
//   priority?: boolean;
// };
//
// const Image: React.FC<ImageProps> = ({
//   image,
//   alt,
//   quality = 75,
//   layout = 'responsive',
//   sizes,
//   priority = false
// }) => {
//   const imageProps = useNextSanityImage(sanityClient, image);
//
//   if (layout === 'fill') {
//     return (
//       <NextImage
//         src={imageProps.src}
//         loader={imageProps.loader}
//         quality={quality}
//         layout={layout}
//         sizes={sizes}
//         alt={alt}
//         objectFit={'cover'}
//         priority={priority}
//       />
//     );
//   }
//
//   return (
//     <NextImage
//       {...imageProps}
//       quality={quality}
//       layout={layout}
//       sizes={sizes}
//       alt={alt}
//       objectFit={'cover'}
//       priority={priority}
//     />
//   );
// };
//
// export type { ImageProps };
// export { Image };

import React from 'react';

const Image: React.FC = () => {
  return <div>Image</div>;
};

export { Image };
