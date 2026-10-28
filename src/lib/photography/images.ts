import type { Photograph, PhotoVariant } from './types';
export const mediaUrl = (variant: PhotoVariant) => `/photography/media/${variant.file}`;
export const photoSrc = (photo: Photograph) => mediaUrl(photo.variants.at(-1)!);
export const photoSrcset = (photo: Photograph) =>
	photo.variants.map((variant) => `${mediaUrl(variant)} ${variant.width}w`).join(', ');
