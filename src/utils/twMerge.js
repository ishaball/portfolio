export function twMerge(...classes) {
  return classes
    .flatMap((c) => (typeof c === 'string' ? c.split(' ') : []))
    .filter(Boolean)
    .join(' ');
}

