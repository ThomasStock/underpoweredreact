import * as React from "react";
import useResizeObserver from "@react-hook/resize-observer";
/**
 * https://www.npmjs.com/package/@react-hook/resize-observer
 */
const useSize = (target: React.RefObject<HTMLElement>) => {
  const [size, setSize] = React.useState<DOMRectReadOnly>();

  React.useLayoutEffect(() => {
    if (target?.current) {
      setSize(target.current.getBoundingClientRect());
    }
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};

export default useSize;
