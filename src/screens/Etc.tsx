import Head from "next/head";

import Link from "@onruntime/next-link";
import PageWrapper from "../components/PageWrapper";

const Etc = () => (
  <PageWrapper>
    <Head>
      <title>{"More | Slorixsh"}</title>
    </Head>
    <h1>{"/etc"}</h1>
    <h2>{"🤝 Thanks"}</h2>
    <p>{"Thanks for visiting. I hope you enjoyed your stay."}</p>
    <p>
      {"Antoniek did a complete rework of the basic "}
      <Link href={"https://github.com/phineas/phineas.io"}>
        {"phineas/phineas.io"}
      </Link>
      {
        " website. "
      }
    </p>
    <p>
      {"The source code for this website is available at "}
      <Link href={"https://github.com/slorixsh/slorixsh.me"}>
        {"slorixsh/slorixsh.me"}
      </Link>
      {"."}
    </p>
    <h2>{"📧 Contact"}</h2>
    <p>
      {"I'm most responsive through Discord DMs, you can "}
      <Link href={"https://discord.com/users/831499138410610750"}>
        {"click here"}
      </Link>{" "}
      {"to DM me on Discord."}
    </p>

    <h2>{"🧭 Other"}</h2>
    <ul>
      <li>
        <Link href="/presence">{"/presence"}</Link>
      </li>
      <li>
        <a href={"https://animeswatch.com"}>{"AnimesWatch"}</a>
      </li>
    </ul>
  </PageWrapper>
);

export default Etc;
