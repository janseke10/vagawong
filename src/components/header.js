import Link from "next/link";
import Navbar from "./navbar";
export default function Header({ categories, isHomePage }) {
  console.log("homepage: ", isHomePage);
  function HomePageTitle() {
    return (
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/" className="hover:underline hover:text-purple">
          Vagawong.
        </Link>
      </h1>
    );
  }
  function NormalTitle() {
    return (
      <h1 className="text-xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/" className="hover:underline hover:text-purple">
          Vagawong.
        </Link>
      </h1>
    );
  }
  return (
    <section className="flex-col md:flex-row flex items-center  md:justify-between mt-16 mb-16 md:mb-12">
      {isHomePage ? <HomePageTitle /> : <NormalTitle />}
      {/* <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/" className="hover:underline hover:text-purple">
          Vagawong.
        </Link>
      </h1> */}
      <div className="mt-5 md:pl-8">
        <Navbar categories={categories} />
      </div>
    </section>
  );
}
