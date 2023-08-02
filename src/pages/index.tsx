import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home">
      <h1 className="flex justify-center items-center w-full py-[100px] ">
        <div className="flex flex-col justify-center text-left font-medium gap">
          <div className="text-2xl ml-10 w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#3cd8ff] to-[#c8ddde]">Heyya, I'm</div>
          <div className="text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#3cd8ff] via-[#c8ddde] to-[#9163e6]">
            Anurag Deore
          </div>
        </div>
      </h1>
      <div className="px-4 flex gap-4 w-full">
        {/* First BOX */}
        <div className="shadow-lg rounded-full w-[60%] p-4 bg-red-200"></div>
        <div className="rounded-full w-[40%] p-4 bg-white">abcd</div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
