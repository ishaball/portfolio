import { useEffect } from 'react';

const rand = (min, max) => Math.random() * (max - min) + min;

export default function Particles() {
  useEffect(() => {
    const root = document.getElementById('bg-particles');
    if (!root) return;

    // Avoid duplicating if HMR rerenders.
    if (root.childElementCount > 0) return;

    const count = 55;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const dot = document.createElement('span');
      dot.className = 'particle';
      dot.style.left = `${rand(0, 100)}%`;
      dot.style.top = `${rand(0, 100)}%`;
      dot.style.width = `${rand(2, 6)}px`;
      dot.style.height = dot.style.width;
      dot.style.opacity = `${rand(0.15, 0.55)}`;
      dot.style.animationDelay = `${rand(0, 6)}s`;
      dot.style.animationDuration = `${rand(6, 12)}s`;
      frag.appendChild(dot);
    }

    root.appendChild(frag);
  }, []);

  return <div id="bg-particles" aria-hidden="true" />;
}

