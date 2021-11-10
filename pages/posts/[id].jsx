import Layout from "/components/layout";
import { getAllPostIds, getPostData } from "/lib/posts";

// getStaticPaths はビルド時にどんな静的サイトを生成したのかを示す関数
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, //指定パス以外なら404を返す
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
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
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
