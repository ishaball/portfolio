import { useInView } from './useInView';
import { twMerge } from '../utils/twMerge';

export default function Reveal({ children, className }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={twMerge(
        'transition-all duration-700 ease-out',
        inView ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-[2px]',
        className
      )}
    >
      {children}
    </div>
  );
}

