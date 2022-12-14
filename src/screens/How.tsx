import Head from "next/head";

import PageWrapper from "../components/PageWrapper";
import Technology from "../components/Technology";
import {
  ReactLogo,
  NextjsLogo,
  TypescriptLogo,
  GoLangLogo,
  GraphQLLogo,
  LaravelLogo,
} from "../components/Icons";

const How = () => {
  return (
    <PageWrapper>
      <Head>
        <title>How I Do It | Slorixsh</title>
      </Head>
      <h1>💻 How I Do It</h1>
      <p>
        I highly leverage new bleeding-edge technologies and languages like
        Typescript or Go to stay on top of the game. You can find a list of my
        most-used technologies below.
      </p>

      {/* <Technology
        color="#9c1fa5"
        icon={<ElixirLogo/>}
        name="Elixir"
        type="Realtime, Backend"
        useCase={
          "Building fault-tolerant realtime systems that scale out across multiple nodes"
        }
      /> */}

      <Technology
        color="#232340"
        icon={<ReactLogo />}
        name="React"
        type="Frontend Framework"
        useCase={
          "Constructing stateful and durable frontends for large and interactive web apps."
        }
      />

      {/* <Technology
        color="#dea584"
        icon={<RustLogo />}
        name="Rust"
        type="Backend, System"
        useCase={
          "Optimizing parts of Elixir code using Rust NIFs and writing efficient system code."
        }
      /> */}


      <Technology
        color="#007acc"
        icon={<TypescriptLogo />}
        name="TypeScript"
        type="JavaScript Framework"
        useCase={
          "Types for JavaScript - will save your life when projects expand."
        }
      />


      <Technology
        color="#18171b"
        icon={<NextjsLogo />}
        name="NextJS"
        type="React Framework"
        useCase={"The React Framework for Production"}
      />

      <Technology
        color="#171e26"
        icon={<GraphQLLogo />}
        name="GraphQL"
        type="Backend"
        useCase={
          "Query language for APIs and a runtime for fulfilling those queries with your existing data."
        }
      />

      {/* <Technology
        color="#FF6600"
        icon={<RabbitMQLogo/>}
        name="RabbitMQ"
        type="Message queue"
        useCase={
          "Messaging between different services in a robust & durable way"
        }
      /> */}
    </PageWrapper>
  );
};

export default How;
