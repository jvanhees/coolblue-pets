// TODO: Add .jpeg support (if applicable)
/**
 * Adds a size indicator (before .jpg) to the URL
 * s =   90×  90 = Small Square (as seen in the example above)
 * b =  160× 160 = Big Square
 * t =  160× 160 = Small Thumbnail
 * m =  320× 320 = Medium Thumbnail
 * l =  640× 640 = Large Thumbnail
 * h = 1024×1024 = Huge Thumbnail
 * @param url The original URL
 * @param size The size (see above for options)
 * @returns The new ULR
 */
export const getImgurSize = (url: string, size = 'm'): string => {
    const pos = url.lastIndexOf('.jpg');
    if (pos < 0) return url;
    return url.substring(0, pos) + size + url.substring(pos);
};
