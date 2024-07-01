export function debounce(func: (value: string) => void, delay: number) {
  let timeoutId: number;
  return function(value: string) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(value), delay);
  };
}