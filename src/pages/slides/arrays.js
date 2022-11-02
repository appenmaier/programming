import React from 'react';
import Slides from '../../components/Slides';
import { defaultInitSlides } from '../../components/Slides/initSlides';

export default function Arrays() {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <pre><code data-trim data-noescape data-line-numbers=""><script type="text/template">
          Random rnd = new Random();
          int i1, i2, i3,...i100;
        </script></code></pre>
      </section>
    </Slides>
  );
}
