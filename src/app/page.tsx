"use client"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import { useState, useEffect } from 'react';
import PageLoader from '@/components/PageLoader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <PageLoader />
  }
  return (
    <main className="">
      <div className="min-h-screen bg-white text-white">
        {/* Hero Section */}
        <section className="relative h-screen">
          {/* <Image
          src="/placeholder.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        /> */}

          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            src="/video1.mp4" // Replace with your video file path
          />
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
              Alak Majumder
            </h1>
            <p className="text-xl sm:text-2xl text-blue-400">VLSI Expert.</p>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 ">
                <Image
                  src="/images/pic4.jpg"
                  alt="About Me"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-2xl"
                />
                <p className="text-pink-500 ml-12 mt-10 font-bold">
                  " Dr. Alak Majumder "
                </p>
              </div>
              <div className="md:w-1/2 text-black ">
                <h2 className="text-2xl font-bold mb-2 text-blue-900">
                  About Me
                </h2>

                <div className="max-w-4xl mx-auto">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="bg-gray-200 text-pink-500 px-1 rounded">
                      Dr. Alak Majumder
                    </span>{" "}
                    is a tenure track Assistant Professor in the Department of
                    Electronics and Communication Engineering (ECE) at{" "}
                    <span className="bg-gray-200 text-pink-500 px-1 rounded">
                      National Institute of Technology (NIT), Arunachal Pradesh,
                      India
                    </span>
                    , where he directs the{" "}
                    <span className="bg-gray-200 text-pink-500 px-1 rounded">
                      Integrated Circuit & System (i-CAS) Lab
                    </span>{" "}
                    founded in 2015. He holds a{" "}
                    <span className="bg-gray-200 text-pink-500 px-1 rounded">
                      Ph.D (Engg) in ECE
                    </span>{" "}
                    from NIT Arunachal Pradesh, where he carried out research on{" "}
                    <span className="bg-gray-200 text-pink-500 px-1 rounded">
                    &quot;High Speed Data Links&quot;
                    </span>{" "}
                    under the supervision of{" "}
                    <span className="bg-gray-200 text-pink-500 px-1 rounded">
                      Prof. (Dr) Bidyut K Bhattacharyya (Fellow IEEE)
                    </span>{" "}
                    and{" "}
                    <span className="bg-gray-200 text-pink-500 px-1 rounded">
                      Dr. P. Chakraborty
                    </span>
                    . Earlier, he earned BE in Electronics and Telecommunication
                    Engineering from{" "}
                    <span className="bg-gray-200 text-pink-500 px-1 rounded">
                      Tripura Institute of Technology, Agartala, India
                    </span>{" "}
                    and{" "}
                    <span className="bg-gray-200 text-pink-500 px-1 rounded">
                      M-Tech in Microelectronics and VLSI Design
                    </span>{" "}
                    from National Institute of Technology, Agartala, India. He
                    serves as a reviewer of many journals / transactions of{" "}
                    <Link
                      href="https://www.ieee.org/"
                      className="bg-gray-200 text-pink-500 px-1 rounded"
                    >
                      IEEE
                    </Link>
                    ,{" "}
                    <Link
                      href="https://www.theiet.org/"
                      className="bg-gray-200 text-pink-500 px-1 rounded"
                    >
                      IET
                    </Link>
                    ,{" "}
                    <Link
                      href="https://www.elsevier.com/"
                      className="bg-gray-200 text-pink-500 px-1 rounded"
                    >
                      Elsevier
                    </Link>
                    ,{" "}
                    <Link
                      href="https://www.springer.com/"
                      className="bg-gray-200 text-pink-500 px-1 rounded"
                    >
                      Springer
                    </Link>
                    ,{" "}
                    <Link
                      href="https://www.worldscientific.com/"
                      className="bg-gray-200 text-pink-500 px-1 rounded"
                    >
                      World Scientific Publishers
                    </Link>
                    ,{" "}
                    <Link
                      href="https://taylorandfrancis.com/"
                      className="bg-gray-200 text-pink-500 px-1 rounded"
                    >
                      Taylor & Francis
                    </Link>
                    ,{" "}
                    <Link
                      href="https://www.aspbs.com/"
                      className="bg-gray-200 text-pink-500 px-1 rounded"
                    >
                      American Scientific Publishers
                    </Link>
                    ,{" "}
                    <Link
                      href="https://iopscience.iop.org/"
                      className="bg-gray-200 text-pink-500 px-1 rounded"
                    >
                      IoP
                    </Link>{" "}
                    and many others.
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  {/* Previous content */}

                  <p className="text-gray-700 leading-relaxed mb-4">
                    He is also serving / served as an organizing member /
                    reviewer of many international conferences of repute.{" "}
                    <span className="bg-gray-200 text-pink-500 px-1 rounded">
                      Dr. Majumder received &quot;Best Research/Paper Award&quot;
                    </span>{" "}
                    from{" "}
                    <span className="bg-gray-200 text-pink-500 px-1 rounded">
                      IETE ASHTech-2018, Indore
                    </span>
                    ,{" "}
                    <span className="bg-gray-200 text-pink-500 px-1 rounded">
                      ICCACCS-2018, Kolkata
                    </span>{" "}
                    and{" "}
                    <span className="bg-gray-200 text-pink-500 px-1 rounded">
                      ICEIC-2017, Phuket
                    </span>
                    . He is a member of{" "}
                    <Link
                      href="https://www.ieee.org/"
                      className="bg-gray-200 text-pink-500 px-1 rounded"
                    >
                      IEEE
                    </Link>
                    . Although his interests span almost all major aspects of{" "}
                    <span className="bg-gray-200 text-pink-500 px-1 rounded">
                      VLSI Circuits and Systems
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="mx-60 border-gray-400" />

        {/* My Best Work Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto ">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
              Research Interest
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* <Card className="bg-gray-400 border-none bg-opacity-30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-pink-500 shadow-2xl">
                    Analog & Digital Integrated Circuit
                  </h3>
                </CardContent>
              </Card> */}

              <Card className="bg-gray-400 border-none bg-opacity-30">
                <CardContent className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold mb-2 text-black  flex  gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-chevrons-right text-pink-500"
                    >
                      <path d="m6 17 5-5-5-5" />
                      <path d="m13 17 5-5-5-5" />
                    </svg>
                    Analog & Digital Integrated Circuit
                  </h3>
                </CardContent>
              </Card>

              <Card className="bg-gray-400 border-none bg-opacity-30">
                <CardContent className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold mb-2 text-black shadow-2xl flex items-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-chevrons-right text-pink-500"
                    >
                      <path d="m6 17 5-5-5-5" />
                      <path d="m13 17 5-5-5-5" />
                    </svg>
                    Low Power Techniques
                  </h3>
                </CardContent>
              </Card>
              <Card className="bg-gray-400 border-none bg-opacity-30">
                <CardContent className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold mb-2 text-black  flex  gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-chevrons-right text-pink-500"
                    >
                      <path d="m6 17 5-5-5-5" />
                      <path d="m13 17 5-5-5-5" />
                    </svg>
                    Current Mode Design
                  </h3>
                </CardContent>
              </Card>
              <Card className="bg-gray-400 border-none bg-opacity-30">
                <CardContent className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold mb-2 text-black  flex  gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-chevrons-right text-pink-500"
                    >
                      <path d="m6 17 5-5-5-5" />
                      <path d="m13 17 5-5-5-5" />
                    </svg>
                    Clock Distribution And Getting Logic
                  </h3>
                </CardContent>
              </Card>
              <Card className="bg-gray-400 border-none bg-opacity-30">
                <CardContent className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold mb-2 text-black  flex  gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-chevrons-right text-pink-500"
                    >
                      <path d="m6 17 5-5-5-5" />
                      <path d="m13 17 5-5-5-5" />
                    </svg>
                    Wireline Communication Circuit
                  </h3>
                </CardContent>
              </Card>
              <Card className="bg-gray-400 border-none bg-opacity-30">
                <CardContent className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold mb-2 text-black  flex  gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-chevrons-right text-pink-500"
                    >
                      <path d="m6 17 5-5-5-5" />
                      <path d="m13 17 5-5-5-5" />
                    </svg>
                    Smart Electrical System Design
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <hr className="p-8 mx-60 border-gray-400" />

        <section>
          <div className="">
            <p className="text-black text-2xl font-bold text-center pt-8">
              Research funded and supported by :{" "}
            </p>

            <Marquee />
          </div>
        </section>
      </div>
    </main>
  );
}
