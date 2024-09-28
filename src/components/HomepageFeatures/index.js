import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Streamline Documentation for Growth',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
    We help startups turn technical documentation into a strategic growth tool. By structuring and optimizing your content, we create easy-to-navigate, SEO-optimized docs that educate users and drive product adoption.
    </>
    ),
  },
  {
    title: 'Build Engaging Communities',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
    Empower your users to become your biggest advocates. Our service builds community platforms where users can engage, share, and help each other, turning your product’s documentation into a thriving ecosystem.
    </>
    ),
  },
  {
    title: 'Turn Documentation into a Lead-Generation Tool',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
    Go beyond education. With strategic content placement and calls-to-action embedded in your technical docs, we help you convert your audience into leads, building a pipeline for business growth through informative, engaging content.
    </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
