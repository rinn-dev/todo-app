import React, { MutableRefObject } from 'react';

interface Props {
  callback: (e?: MouseEvent | TouchEvent) => void;
  excludeClassNames?: string[];
}

type useClickAway<T> = MutableRefObject<T | null>;

/**
 * Custom React hook to handle click events outside of a specified element.
 *
 * @template T - The type of the element reference.
 * @param props - The hook's configuration options.
 * @param  props.callback - The callback function to be executed when a click event occurs outside the element.
 * @param [props.excludeClassNames=[]] - An optional array of class names to exclude from triggering the callback function.
 * @returns - The mutable reference object containing the element reference.
 */

export const useClickAway = <T extends HTMLElement>({
  callback,
  excludeClassNames = [],
}: Props): useClickAway<T> => {
  const ref = React.useRef<T | null>(null);
  const refCb = React.useRef(callback);

  React.useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      const element = ref.current;
      if (element && !element.contains(e.target as Node)) {
        let isExclusion = false;
        const targetClassNames = (e.target as Element)?.classList || [];

        for (let i = 0; i < excludeClassNames.length; i++) {
          if (targetClassNames.contains(excludeClassNames[i])) {
            isExclusion = true;
            break;
          }
        }

        !isExclusion && refCb.current(e);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [excludeClassNames]);

  return ref;
};
