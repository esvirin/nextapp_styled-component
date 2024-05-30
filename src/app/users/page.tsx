import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <Link href={"/users/1"}>1</Link>
      <Link href={"/users/2"}>2</Link>
      <Link href={"/users/3"}>3</Link>
      <Link href={"/users/4"}>4</Link>
    </ul>
  );
}
