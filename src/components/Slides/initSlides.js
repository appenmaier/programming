import Reveal from 'reveal.js/dist/reveal.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';
import Notes from 'reveal.js/plugin/Notes/notes.esm.js';
import Search from 'reveal.js/plugin/search/search.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';

export const defaultInitSlides = () =>
  new Reveal({
    plugins: [Zoom, Notes, Search, Highlight],
  }).initialize({ hash: true });
