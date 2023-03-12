import { type NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import posts from "../../resources/posts.json";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>tomato-central</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col py-4">
        <Header />
        <section className="flex-1 px-6 py-4">
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className="card my-8 w-auto bg-base-300 shadow-sm"
              >
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.content}</p>
                  <div className="card-actions py-2">
                    <button className="btn-primary btn-sm btn ">Read</button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Home;
