"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-800">
      <div className="flex items-center space-x-4">
        <Link href="/" passHref>
          <Avatar className="cursor-pointer">
            {" "}
            {/* Add class for pointer cursor */}
            <AvatarImage src="/images/pic5.jpg" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Link>
        <span className="text-lg font-bold text-white">
          <span className="text-blue-600">A</span>lak
          <br />
          <span className="text-blue-600">M</span>ajmuder
        </span>
      </div>
      <nav className="flex items-center space-x-6 text-white">
        <Link
          href="/experiences"
          className="hover:text-gray-400"
          prefetch={false}
        >
          Experience
        </Link>
        <Link href="/students" className="hover:text-gray-400" prefetch={false}>
          Students
        </Link>
        <Link href="/patents" className="hover:text-gray-400" prefetch={false}>
          Patents
        </Link>
        <Link
          href="/publications"
          className="hover:text-gray-400"
          prefetch={false}
        >
          Publications
        </Link>
        <Link href="/projects" className="hover:text-gray-400" prefetch={false}>
          Projects
        </Link>
        <Link href="/education" className="hover:text-gray-400" prefetch={false}>
          Education
        </Link>
        <Link href="/iCAS" className="hover:text-gray-400" prefetch={false}>
          iCAS
        </Link>
      </nav>
      <Button
        className="bg-gray-800 hover:bg-blue-700 text-white"
        variant={"outline"}
      >
        SignIn
      </Button>
    </header>
  );
}
