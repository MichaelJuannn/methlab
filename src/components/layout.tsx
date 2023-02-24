import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="fixed inset-x-0 bottom-0 flex w-screen justify-evenly bg-primary p-5 ">
        <div>Instagram</div>
        <div>Instagram</div>
        <div>Instagram</div>
      </div>
    </footer>
  );
}

export function Navbar() {
  return (
    <div className="bg-primary p-5">
      <Link href="/">
        <div>LOGO</div>
      </Link>
    </div>
  );
}
