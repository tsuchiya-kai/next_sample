import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>FirstPost</h1>
      <Link href="/">
        <a>トップへ行きます</a>
      </Link>
    </>
  );
}
