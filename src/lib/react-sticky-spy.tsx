import React, {
  Children, cloneElement, FC, isValidElement, PropsWithChildren, ReactElement, useEffect, useRef, useState,
} from 'react';

export type StickySpyProps = PropsWithChildren<{
  /**
   * Set a custom name for the attribute
   * @default "data-react-is-sticky"
   */
  attribute?: string;
  /**
   * Callback function that is called when the sticky element changes
   * @param isSticky Current state of the sticky element
   */
  onStickyChange?: (isSticky: boolean) => void;
}>

export const StickySpy: FC<StickySpyProps> = ({
  children,
  onStickyChange,
  attribute = 'data-react-is-sticky',
}) => {
  const spyRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const spy = spyRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsStuck(!entry.isIntersecting);
      onStickyChange?.(!entry.isIntersecting);
    });

    if (spy) {
      observer.observe(spy);
    }

    return () => (spy ? observer.unobserve(spy) : undefined);
  }, [children, spyRef, onStickyChange]);

  return (
    <>
      <div ref={spyRef} data-react-sticky-spy style={{ height: 0, position: 'absolute' }} />
      {Children.map(
        children,
        child => (isValidElement(child) ? cloneElement(child as ReactElement, { [attribute]: isStuck }) : child),
      )}
    </>
  );
};