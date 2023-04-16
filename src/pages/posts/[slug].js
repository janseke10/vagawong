import { useRouter } from "next/router";
import Head from "next/head";

import Layout from "../../components/layout";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";
import Footer from "../../components/footer";
import MoreStories from "@/components/components/more-stories";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../api/api";
import { getServerSideProps } from "@/components/lib/serverProps";
import Header from "@/components/components/header";
import Container from "@/components/components/container";

export default function Post({ post, posts, categories }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    console.log("redirect to errorpage!!");
  }

  return (
    <Layout>
      <Container>
        <Header categories={categories} isHomePage={false} />
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <>
            <article>
              <Head>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
                <title>{post.title}</title>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              {/* <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer> */}
            </article>
            <hr className="border-accent-2 mt-28 mb-24" />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
      <Footer />
    </Layout>
  );
}

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const categories = await getServerSideProps();
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  console.log("cats:", categories);
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      categories: categories.props.categories,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};
