"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          SchoolApp
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-4">
          <Link href="/show-schools">
            <Button variant="outline" className="rounded-full">
              Show Schools
            </Button>
          </Link>
          <Link href="/add-school">
            <Button className="rounded-full">Add School</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
