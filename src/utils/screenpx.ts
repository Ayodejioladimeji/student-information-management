
export function screenPixels(
  size: string,
  setState: (value: boolean) => void
): () => void {
  const mediaQuery = window.matchMedia(`(max-width: ${size})`);

  function handleScreenSizeChange(event: MediaQueryListEvent) {
    setState(event.matches);
  }

  mediaQuery.addEventListener("change", handleScreenSizeChange);

  // Initialize the state
  setState(mediaQuery.matches);

  // Cleanup function
  return () => {
    mediaQuery.removeEventListener("change", handleScreenSizeChange);
  };
}