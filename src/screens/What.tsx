import Head from "next/head";

import Link from "@onruntime/next-link";
import PageWrapper from "@components/PageWrapper";

const Home = () => {
  return (
    <PageWrapper forceReadableWidth>
      <Head>
        <title>{"What I Do | Slorixsh"}</title>
      </Head>
      <h1>{"🤔 What I Do"}</h1>
      <p>{"15 y/o developer and youtuber."}</p>
      <p>
        {
          "I build and publish projects of quality and reliability. Currently, I'm Moderator At "
        }
        <Link href="https://animeswatch">{"Animeswatch"}</Link>
        
        
        {" and Contributor at "}
        <Link href="https://files.community/">{"Files App"}</Link>
        {"."}
      </p>
      <p>
        {
          "I also mix and speed up musics on my Youtube Channel and by the way I love bringing people together to create and have fun together! 🥳"
        }
      </p>
    </PageWrapper>
  );
};

export default Home;
