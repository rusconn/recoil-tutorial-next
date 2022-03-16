import type { NextPage } from "next";
import Head from "next/head";

import { Layout } from "@/components/layout";
import { TodoListArea } from "@/components/pages/home";

const Home: NextPage = () => (
  <Layout>
    <Head>
      <title>recoil todo list</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TodoListArea />
  </Layout>
);

export default Home;
