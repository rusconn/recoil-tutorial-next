import type { NextPage } from "next";
import Head from "next/head";

import { TodoListArea } from "@/components/home";

const Home: NextPage = () => (
  <>
    <Head>
      <title>recoil todo list</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TodoListArea />
  </>
);

export default Home;
