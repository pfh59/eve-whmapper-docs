import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="GettingStarted/installation">
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>

      </main>
    </Layout>
  );
}

function Tile({
  tile,
  className,
}) {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div className={clsx('col', className)} >
      <div className="tile">
        <img
          className={styles.tilesImage}
          alt={tile.title}
          width={Math.floor(tile.image.width)}
          height={Math.floor(tile.image.height)}
          src={withBaseUrl(tile.image.src)}
          loading="lazy"
        />
        <h3 className={clsx(styles.tilesHeading)}>{tile.title}</h3>
        <p>{tile.links}</p>
      </div>
    </div >
  );
}

function TilesContainer() {
  const firstRow = Tiles.slice(0, 4);
  const secondRow = Tiles.slice(4);

  return (
    <div className="container text--center">
      <div className="row margin-bottom--lg">
        {firstRow.map((tile, idx) => (
          <Tile tile={tile} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((tile, idx) => (
          <Tile
            tile={tile}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}