import { gql } from "@apollo/client";
import { client } from "../lib/apollo";

export async function getPostByIdSimple(slug: string) {
  console.log("getpostbyid, slug: ", slug);
  const GET_POST_BY_ID = gql`
    query getPost($id: ID!) {
      post(id: $id, idType: SLUG) {
        content
        date
        title
      }
    }
  `;
  const response = await client.query({
    query: GET_POST_BY_ID,
    variables: { id: slug },
  });
  console.log("RESPONSE:", response);
  const post = response?.data.post;
  console.log("POST: ", post);

  //   const post = {
  //     content: data.post.content,
  //     date: data.post.date,
  //     title: data.post.title,
  //   };

  return post;
}

export async function getPostById(slug: string) {
  console.log("getpostbyid, slug: ", slug);
  const GET_POST_BY_ID = gql`
    query getPost($id: ID!) {
      post(id: $id, idType: SLUG) {
        author {
          node {
            description
            firstName
            lastName
            slug
            avatar {
              url
            }
          }
        }
        content
        date
        featuredImage {
          node {
            caption
            altText
            sourceUrl
          }
        }
        title
        comments {
          nodes {
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
            content
            date
            approved
            parentId
            databaseId
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POST_BY_ID,
    variables: { id: slug },
  });
  console.log("RESPONSE:", response);
  const post = response?.data.post;
  return post;
  //   const post = {
  //     post: {
  //       author: {
  //         node: {
  //           description: data.author.node.description,
  //           firstname: data.author.node.firstName,
  //           lastName: data.author.node.lastName,
  //           slug: data.author.node.slug,
  //           avatar: {
  //             url: data.author.node.avatar.url,
  //           },
  //         },
  //       },
  //       content: data.content,
  //       date: data.date,
  //       featuredImage: {
  //         node: {
  //           caption: data.featuredImage.node.caption,
  //           altText: data.featuredImage.node.altText,
  //           sourceUrl: data.featuredImage.node.sourceUrl,
  //         },
  //       },
  //       title: data.title,
  //       comments: {
  //         nodes: {
  //           approved: data.comments.nodes.approved,
  //           content: data.comments.nodes.content,
  //           date: data.comments.nodes.date,
  //           parentId: data.comments.nodes.parentId,
  //           databaseId: data.comments.nodes.databaseId,
  //           author: {
  //             node: {
  //               name: data.comments.nodes.author.node.name,
  //               avatar: {
  //                 url: data.comments.nodes.author.node.avatar.url,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   };
}

export async function getAllPostSlugs() {
  const GET_ALL_POST_SLUGS = gql`
    query getAllSlugs {
      posts {
        nodes {
          slug
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_ALL_POST_SLUGS,
  });
  const postNodes = response?.data.posts.nodes;
  console.log("SLUGS: ", postNodes);
  return { postNodes };
}
