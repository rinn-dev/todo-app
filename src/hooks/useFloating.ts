import {
  type UseFloatingOptions,
  flip,
  useFloating as useBaseFloating,
} from '@floating-ui/react-dom';

interface UseFloatingProps extends UseFloatingOptions {}

export const useFloating = ({ ...props }: Partial<UseFloatingProps> = {}) => {
  return useBaseFloating({
    placement: 'bottom-end',
    middleware: [flip()],
    ...props,
  });
};
