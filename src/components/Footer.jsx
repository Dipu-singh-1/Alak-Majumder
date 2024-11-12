"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-9">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              {/* <Avatar className="h-10 w-10 mr-2">
                <AvatarImage src="/avatar.png" alt="INBIO" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar> */}
              <span className="text-xl font-semibold"><span className="text-blue-600">A</span>lak <span className="text-blue-600" >M</span>ajmuder</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-600 p-2 hover:bg-gray-700"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-600 p-2 hover:bg-gray-700"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-600 p-2 hover:bg-gray-700"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-blue-500 font-semibold mb-4">E-mail</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm"> alak@nitap.ac.in</Link>
              </li>
              <li>
                <Link href="#" className="text-sm">alak@ieee.org</Link>
              </li>
              <li>
                <Link href="#" className="text-sm">majumder.alak@gmail.com</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-500 font-semibold mb-4">Phone</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm">+ 91 9436288578</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-500 font-semibold mb-4">Address</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm">
                  Alak Majumder Integrated Circuit and System (i-CAS) Lab
                  Department of ECE NIT Arunachal Pradesh India - 791112
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-500 font-semibold mb-4">Location</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm">Permanent Campus (Jote)</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>© 2024. All rights reserved by Alak Majumder.</p>
        </div>
      </div>
    </footer>
  );
}
