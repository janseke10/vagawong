import { ParsedUrlQuery } from "querystring";

export interface CategoryProps {}

export interface Comment {
  approved: boolean;
  content: string;
  date: Date;
  parentId: number;
  databaseId: number;
  author: {
    node: {
      name: string;
      avatar: {
        url: string;
      };
    };
  };
}

export interface SinglePostProps {
  author: {
    node: {
      description: string;
      firstname: string;
      lastName: string;
      slug: string;
      avatar: {
        url: string;
      };
    };
  };
  content: string;
  date: Date;
  featuredImage: {
    node: {
      caption: string;
      altText: string;
      sourceUrl: string;
    };
  };
  title: string;
  comments: {
    nodes: Comment[];
  };
}

export interface SinglePostPropsBasics {
  title: string;
  date: Date;
  content: string;
}

export interface PostsProps {}

export interface IParams extends ParsedUrlQuery {
  slug: string;
}
