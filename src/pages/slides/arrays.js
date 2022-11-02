import React from 'react';
import Slides from '../../components/Slides';
import { defaultInitSlides } from '../../components/Slides/initSlides';

export default function Arrays() {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <div>i1</div>
        <div>i2</div>
        <div>i3</div>
        <div>...</div>
        <div>i100</div>
        <pre><code data-trim data-noescape data-line-numbers=""><script type="text/template">
Random rnd = new Random();
int i1, i2, i3,...i100;
        </script></code></pre>
      </section>
    </Slides>
  );
}
