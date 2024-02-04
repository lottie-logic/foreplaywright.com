import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";

import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: string;
  description: JSX.Element;
};

// type TopicItem = {
//   title: string;
//   path: string;
//   image: string;
// };

// const topicList: TopicItem[] = [
//   {
//     title: "Text",
//     path: "/docs/Topics/HTML-CSS/HTML/",
//     image:
//       "https://media2.giphy.com/media/3osxYcHkIWl29UKdoc/200w.webp?cid=ecf05e47wjc86ou415gaewpujk6q7x1drf5b4rz48kshx05k&ep=v1_gifs_search&rid=200w.webp&ct=g",
//   },
//   {
//     title: "CSS",
//     path: "/docs/Topics/HTML-CSS/CSS/CSS",
//     image:
//       "https://media2.giphy.com/media/13FrpeVH09Zrb2/200.webp?cid=ecf05e471gr9m0rymcm7soozgh8kqa3a5v63tnouwz4nybkl&ep=v1_gifs_search&rid=200.webp&ct=g",
//   },
//   {
//     title: "Javascript",
//     path: "/docs/Topics/Javascript/",
//     image:
//       "//media0.giphy.com/media/hUhARUMJB4OsRMXJ6l/200w.webp?cid=ecf05e47cnfozh2ae51nnjcd5czqw0l12bmbmr68az3bi97i&ep=v1_gifs_search&rid=200w.webp&ct=g",
//   },

//   {
//     title: "Computer Science",
//     path: "/docs/Topics/Computer-Science/Basics",
//     image: "https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif",
//   },
//   {
//     title: "React",
//     path: "/docs/Topics/React/",
//     image:
//       "https://media1.giphy.com/media/scZPhLqaVOM1qG4lT9/giphy.webp?cid=ecf05e4746899dlj67hgm7ihcro6ufnqb0dj9h7bc09hxf4w&ep=v1_gifs_search&rid=giphy.webp&ct=g",
//   },
//   {
//     title: "AI",
//     path: "/docs/Topics/AI",
//     image:
//       "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3U0OTBma2FxeTlycGV2dWttMGx2YW5manB1Y3M0bDlrdW1yeW10ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IZY2SE2JmPgFG/giphy.gif",
//   },
// ];

// function Topic({ title, image, path }: TopicItem) {
//   return (
//     <Link href={path} className={clsx("col col--3")}>
//       <div className={`feature-padding`}>
//         <div className="text--center">
//           <img className="topic-image" src={image} />
//         </div>
//         <div className="text--center padding-horiz--md">
//           <Heading as="h3">{title}</Heading>
//         </div>
//       </div>
//     </Link>
//   );
// }

// function TopicList(): JSX.Element {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {topicList.map((props, idx) => (
//             <Topic key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

const FeatureList: FeatureItem[] = [
  {
    title:
      "🎭 Seductively Simple Naming: Less Guesswork, More Pleasure in Testing",
    Svg: "🎭",
    description: (
      <>
        ForePlaywright teases out the complexity of Playwright, offering
        function names that are as easy to grasp as they are hard to forget.
        Crafted for immediate recall and minimal fuss, our library turns the
        chore of test writing into an enticing experience. Step into an
        intuitive testing session where efficiency meets allure, and writing
        tests becomes as enjoyable as anticipating their flawless execution.
      </>
    ),
  },
  {
    title: "Enticing Documentation: Each Function, Unveiled with Charm",
    Svg: "📖",
    description: (
      <>
        Dive into the depths of Playwright with ForePlaywright's provocatively
        detailed documentation. Every utility is stripped down to its essentials
        and presented with clarity, turning the mundane task of reading manuals
        into a captivating exploration. Embrace the power to effortlessly
        conquer testing challenges, armed with knowledge that's as engaging as
        it is informative.
      </>
    ),
  },
  {
    title:
      "Irresistible Integration: Flirt with Functionality, From Novices to Experts",
    Svg: "🧪",
    description: (
      <>
        ForePlaywright invites you to flirt with testing success through our
        straightforward, seductive syntax. Envision the test scenario,
        articulate your desires in code, and watch as ForePlaywright responds
        with precision and grace. Tailored for the eager beginner and the
        experienced connoisseur alike, our library makes entering the spotlight
        of quality assurance an affair to remember, simplifying testing with a
        wink and a nod towards excellence.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <h2 className={styles.featureSvg}>{Svg}</h2>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
