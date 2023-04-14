import React, {
  Children, cloneElement, FC, isValidElement, PropsWithChildren, ReactElement, useEffect, useRef, useState,
} from 'react';

type StickySpyProps = PropsWithChildren<{
  attribute?: string;
}>

export const StickySpy: FC<StickySpyProps> = ({
  children,
  attribute = 'data-react-is-sticky',
}) => {
  const spyRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const spy = spyRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsStuck(!entry.isIntersecting);
    });

    if (spy) {
      observer.observe(spy);
    }

    return () => (spy ? observer.unobserve(spy) : undefined);
  }, [children, spyRef]);

  return (
    <>
      <div ref={spyRef} />
      {Children.map(
        children,
        child => (isValidElement(child) ? cloneElement(child as ReactElement, { [attribute]: isStuck }) : child),
      )}
    </>
  );
};
