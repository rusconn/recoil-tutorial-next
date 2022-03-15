import type { NextPage } from "next";
import Head from "next/head";

import { TodoList } from "@/components/home";

const Home: NextPage = () => (
  <>
    <Head>
      <title>recoil todo list</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TodoList />
  </>
);

export default Home;
