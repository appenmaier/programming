import React from 'react';
import Slides from '../../components/Slides';
import { defaultInitSlides } from '../../components/Slides/initSlides';

export default function Arrays() {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <div data-block-type="code" style="width: auto; height: auto;">
          <div data-highlight-theme="darcula" data-code-frame="none" data-code-autoheight="true">
            <pre style="font-size: 16px; line-height: 19px;" class="java">
              <code data-line-numbers="">
                Random rnd = new Random();
                int i1, i2, i3,...i100;
              </code>
            </pre>
          </div>
        </div>
      </section>
    </Slides>
  );
}
