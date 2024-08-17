import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '文档',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        文档站点1（目前还没搞呢）  <br />
        文档站点2（目前还没搞呢） <br />
        文档站点3（目前还没搞呢） <br />
      </>
    ),
  },
  {
    title: '视频',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <a target="_blank" rel="noopener noreferrer" href="https://space.bilibili.com/77463024">搬砖人B站视频</a> <br />
        <a target="_blank" rel="noopener noreferrer" href="https://www.douyin.com/user/MS4wLjABAAAAzORSDV5KwKuDtV8XxU4QZbeRZom9GOJR3E_e4JReskA">搬砖人抖音视频</a>
      </>
    ),
  },
  {
    title: '软件下载',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        阿里网盘（目前还没搞呢）  <br />
        夸克网盘（目前还没搞呢） <br />
        百度网盘（目前还没搞呢） <br />
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
