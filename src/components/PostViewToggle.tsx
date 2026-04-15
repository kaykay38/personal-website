import { useState } from 'react';

type Props = {
  cursiveAsset?: string;
  children: React.ReactNode;
};

export default function PostViewToggle({ cursiveAsset, children }: Props) {
  const [view, setView] = useState<'typed' | 'cursive'>('typed');
  const hasCursive = Boolean(cursiveAsset);

  return (
    <section>
      <div className="post-view-controls" aria-label="Post view controls">

        <div className="post-view-toggle" role="tablist" aria-label="Choose post view">
          <button
            type="button"
            className={view === 'typed' ? 'active' : ''}
            onClick={() => setView('typed')}
            aria-pressed={view === 'typed'}
          >
            Typed
          </button>

          {hasCursive && (
            <button
              type="button"
              className={view === 'cursive' ? 'active' : ''}
              onClick={() => setView('cursive')}
              aria-pressed={view === 'cursive'}
            >
              Cursive
            </button>
          )}
        </div>
      </div>

      {view === 'typed' && <div className="typed-view">{children}</div>}

      {view === 'cursive' && hasCursive && (
        <div className="cursive-view">
          <img
            src={cursiveAsset}
            alt="Handwritten cursive version of this post"
            className="cursive-post-image"
          />
        </div>
      )}
    </section>
  );
}
