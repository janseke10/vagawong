import { fetchAPI } from "../pages/api/api";

export async function getServerSideProps(ctx) {
  const response = await fetchAPI(`
	query getAllCategories {
		categories {
		  edges {
			node {
			  name
			  slug
			  children {
				nodes {
				  slug
				  name
				}
			  }
			  ancestors {
				nodes {
				  slug
				  name
				}
			  }
			}
		  }
		}
	  }  
	`);
  //   console.log(response.categories.edges);
  const categories = response?.categories.edges;
  console.log("categories: ", categories);
  return {
    props: {
      categories,
    },
  };
}
