export function isEmpty(value: string): boolean {
  return value.length == 0;
}

export function getOptimizedPreview(
  url: string,
  width: number = 500,
  height: number = 500,
): string {
  const index = url.lastIndexOf("/");

  return url
    .substring(0, index)
    .concat(
      `/-/preview/${width}x${height}/-/quality/smart_retina/-/format/auto/`,
    );
}
