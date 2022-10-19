import Head from "next/head";

import PageWrapper from "@components/PageWrapper";
import Co from "@components/Where/Co";
import Repo from "@components/Where/Repo";

const Where = () => {
  return (
    <PageWrapper>
      <Head>
        <title>{"Where I've Done It | Slorixsh"}</title>
      </Head>
      <h1>{"📍 Where I've Done It"}</h1>
      <Co />
      <Repo />
    </PageWrapper>
  );
};

export default Where;
