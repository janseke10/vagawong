import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostSlugs, getPostById } from "../../../helpers/api-util";
import {
  IParams,
  SinglePostProps,
  SinglePostPropsBasics,
} from "../../../types";

type Props = {
  selectedPost: SinglePostPropsBasics;
};

const PostPage: React.FC<Props> = (props) => {
  console.log("Propsss: ", props);
  const post = props.selectedPost as SinglePostProps;
  console.log("PROPS:", post);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.author.node.slug}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  console.log("Slug: ", slug);
  const post = await getPostById(slug);
  console.log("POST: ", post);
  return {
    props: {
      selectedPost: post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllPostSlugs();
  console.log("DATA: ", data);
  const { postNodes } = data;
  const params = postNodes.map((postNode: { slug: string }) => ({
    params: {
      slug: postNode.slug,
    },
  }));

  return {
    paths: params,
    fallback: false,
  };
};

export default PostPage;
