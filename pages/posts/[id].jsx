import Head from "next/head";
import Layout from "/components/layout";
import Date from "/components/date";
import { getAllPostIds, getPostData } from "/lib/posts";
import utilStyles from "../../styles/utils.module.css";

// getStaticPaths はビルド時にどんな静的サイトを生成したのかを示す関数
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, //指定パス以外なら404を返す
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  console.log({ postData });
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
