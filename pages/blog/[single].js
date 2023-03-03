import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { getPost } from 'api/posts'; 
import Base from "@layouts/Baseof";

const BlogDetailsp = ({ 
  blogposts,
}) => {

  return (
    <Base title="Blog Post Details">
    <section className="section pt-0">
      <div className="container text-center">    

        <div className="content text-left">
        <h1>
        {blogposts.title}
      </h1>
      <p>
        {blogposts.body}
      </p>
        </div>

       
      </div>
    </section>
    </Base>
  );
};

export default BlogDetailsp;

export const getServerSideProps = async ({ params }) => {
  
  const res = await getPost(params.single)
  const json = await res.json()

 console.log('s',json[0]);


  return {
    props: {      
      blogposts: json[0],
    },
  };
};