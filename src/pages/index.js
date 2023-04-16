import Head from "next/head";

import Header from "../components/header";
import Layout from "../components/layout";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import MoreStories from "../components/more-stories";
import { getAllPostsForHome } from "./api/api";
import { getServerSideProps as getServerSidePropsBase } from "../lib/serverProps";
import Footer from "../components/footer";

export default function Home({ allPosts, categories }) {
  const heroPost = allPosts?.edges[0]?.node;
  const morePosts = allPosts?.edges.slice(1);

  return (
    <Layout>
      <Head>
        <title>Vagawong</title>
      </Head>
      <Container>
        <Header categories={categories} isHomePage="true" />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const categories = await getServerSidePropsBase(ctx);

  const allPosts = await getAllPostsForHome(false);

  return {
    props: {
      ...categories.props,
      allPosts,
    },
  };
}

// export const getStaticProps = async ({ preview = false }) => {
// };
