import { useEffect, useState } from 'react';

const words = ['Full stack developer', 'AI & IoT Enthusiast', 'Problem Solver',  'C++ Developer'];

export default function TypingFixed() {
  const [wordIndex, setWordIndex] = useState(0);
  const [dir, setDir] = useState('type'); // 'type' | 'pause' | 'erase'
  const [text, setText] = useState('');

  const current = words[wordIndex];

  useEffect(() => {
    const speed = dir === 'type' ? 60 : dir === 'erase' ? 35 : 900;

    const t = setTimeout(() => {
      if (dir === 'pause') return;

      if (dir === 'type') {
        const nextText = current.slice(0, text.length + 1);
        setText(nextText);

        if (nextText.length === current.length) {
          setDir('pause');
          // Switch after pause
          setTimeout(() => setDir('erase'), 900);
        }
        return;
      }

      if (dir === 'erase') {
        const nextText = current.slice(0, Math.max(0, text.length - 1));
        setText(nextText);

        if (nextText.length === 0) {
          setDir('type');
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [dir, current, text.length]);

  return (
    <span className="typing" aria-label="Typing title">
      {text}
      <span className="typing__cursor" aria-hidden="true" />
    </span>
  );
}

