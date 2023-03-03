import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const BlogDetails = () => {

  return (
    <section className="section pt-0">
      <div className="container text-center">
       

        <div className="content text-left">
Blog        </div>

       
      </div>
    </section>
  );
};

export default BlogDetails;
