import Social from "./SOCIAL";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center  bg-black bg-opacity-90  text-white font-serif py-3">
      {/* Social Links */}
      <div className="mb-4">
        <Social />
      </div>

      {/* Copyright Text */}
      <div className="text-center text-sm">
        © {new Date().getFullYear()} All rights reserved. |{" "}
        <span className="font-semibold italic">Ayesha</span>
      </div>
    </footer>
  );
}