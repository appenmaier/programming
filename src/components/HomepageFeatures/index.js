import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
  title: 'Everything as Code',
    description: (
      <>
        Wir versuchen alles in Textform (Code) bereitzustellen.
        Dadurch kann nach allem schnell gesucht werden und ist nachvollziehbar.
      </>
    ),
  },
  {
    title: 'Community by Design',
    description: (
      <>
        Professionelle Softwareentwicklung bedeutet Collaboration.
        Findet ihr einen Rechtschreibfehler?
        Ein Dozent hat einen Fehler gemacht? 
        Lasst es ihn auf moderne Weise wissen.
        (Issues, Pull Request, Discussions).
      </>
    ),
  },
  {
    title: 'Unsponsored',
    description: (
      <>
        Die verwendeten Tools und Methoden wurden freiwillig ausgesucht.
        Sie spiegeln die persoenlichen Praeferenzen der Dozenten wieder
        und wurden auf bestehenden Erfahrungswerten ausgesucht.
        Was nicht bedeuted, dass es keine anderen oder besseren Tools gibt.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
