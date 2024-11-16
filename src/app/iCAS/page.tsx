"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Component() {
  const autoplayOptions = {
    delay: 1000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  };
  const plugin = React.useRef(Autoplay(autoplayOptions));

  const labImages = [
    "/images/iCAS-logo.png",
    "/images/Lab_Team.png",
    "/images/Lab1.png",
    "/images/Lab2.png",
    "/images/Lab3.png",
    "/images/Lab4.png",
    "/images/Lab5.png",
    "/images/Lab6.png",
    "/images/Lab7.png",
    "/images/Lab8.png",
    "/images/Lab10.png",
  ];

  const tools = [
    {
      name: "Cadence",
      features: [
        "Circuit & Layout Design - Virtuoso",
        "Circuit Simulation - Spectre",
        "RC extraction - Quantus QRC",
      ],
    },
    {
      name: "Synopsys",
      features: [
        "Device simulation - 3D TCAD University Bundle",
        "Circuit & Layout Design - Custom Compiler",
        "DRC & LVS - IC Validator/Hercules",
        "RC extraction - Star RC",
      ],
    },
    {
      name: "Mentor Graphics",
      features: [
        "Circuit & Layout Design - Pyxis",
        "Circuit Simulation - Eldo",
        "RC extraction - xRC",
      ],
    },
    {
      name: "Xilinx",
      features: ["Vivado Design Suite"],
    },
    {
      name: "Altair",
      features: ["eLtoh CAD", "Nexxim/RF tool", "T-Spice Pro"],
    },
  ];

  const workstations = [
    {
      name: "HP Z440 Workstation",
      specs: [
        "INTEL XEON(E5-1620v3)",
        "Base Clock - 3.50GHz",
        "Total RAM - 64GB",
        "Total Count = 05",
      ],
    },
    {
      name: "HP 405 G3 MT",
      specs: [
        "INTEL CORE i7(MTPL-4590)",
        "Base Clock - 3.3GHz",
        "Total RAM - 8GB",
        "Total Count = 25",
      ],
    },
  ];

  const chipLayout = {
    name: "Chip-Tape Out - 01",
    specs: [
      "Semicore-umc-65nm",
      "Die Size: 1.875mm",
      "Package: QFN",
      "Pin Count: 32pin",
      "Students: Pritam, Madhu, Sandeep",
    ],
  };

  const collaborators = [
    {
      name: "Dr. Bidyut K Bhattacharyya",
      title: "Fellow IEEE",
      email: "email@example.com",
      affiliation: "Georgia Tech, Atlanta, USA",
      designation: "Research Engineer",
      department: "Packaging Research Center",
      interests: "Power Delivery, Packaging",
      photo: "/images/Bidyut.JPG",
    },
    {
      name: "Dr. Harijung Song",
      title: "Professor",
      email: "email@example.com",
      affiliation: "Nanoscience and Engineering",
      designation: "Professor",
      department: "Nanoscience and Engineering",
      interests: "Circuit Design, Memristor",
      photo: "/images/Hanjung.JPG",
    },
    {
      name: "Dr. Saraju P Mohanty",
      title: "Professor",
      email: "email@example.com",
      affiliation: "Computer Science & Engineering",
      designation: "Professor",
      department: "Computer Science & Engineering",
      interests: "Consumer Electronics, CPS",
      photo: "/images/Saraju.JPG",
    },
    {
      name: "Dr. Saeid Gorgin",
      title: "Assistant Professor",
      email: "email@example.com",
      affiliation: "Computer Engineering",
      designation: "Assistant Professor",
      department: "Computer Engineering",
      interests: "Computer Arithmetic, VLSI",
      photo: "/images/Saeid.jpg",
    },
    {
      name: "Dr. Abir Jyoti Mondal",
      title: "Assistant Professor",
      email: "email@example.com",
      affiliation: "Electronics & Communication",
      designation: "Assistant Professor",
      department: "Electronics & Communication",
      interests: "Digital & Analog IC",
      photo: "/images/Abir.jpg",
    },
  ];

  const galleryImages = [
    {
      title: "With Students at ESIC 2020, Haryana, India",
      src: "/images/ESIC-2020.jpeg",
    },
    {
      title: "Lunch with ECE Faculties / Staff - 2019",
      src: "/images/ECE_Faculty.jpg",
    },
    {
      title: "AICTE Visit-2019, New Delhi",
      src: "/images/AICTE-2019.jpg",
    },
    {
      title: "Best Paper Award, ICCACS-2018, Kolkata",
      src: "/images/ICCACCS-2018.jpg",
    },
    {
      title: "Best Research Award, AmTTech 2019, Indore",
      src: "/images/AshTech_2018.jpg",
    },
    {
      title: "NIT AP Convocation-2018 with Students",
      src: "/images/Convocation-2018.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-blue-100">
      <div className="prose prose-blue max-w-none dark:prose-invert">
        <h1 className="text-3xl text-center font-bold tracking-tight text-blue-800">
          Integrated Circuit & System (I-CAS) Lab
        </h1>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-3xl mx-auto my-8"
        >
          <CarouselContent>
            {labImages.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <Image
                        src={src}
                        alt={`Lab image ${index + 1}`}
                        width={400}
                        height={300}
                        className="object-cover rounded-md"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <p className="text-blue-800">
          Established in 2015 under the financial assistance from Ministry of
          Electronics & Information Technology, Government of India through
          Special Manpower Development Program Chip-to-System Design project. It
          is one of the core labs in the department of Electronics &
          Communication Engineering, NIT Arunachal Pradesh. The lab facilitates
          the commercial EDA tools like Cadence, Synopsys, Mentor Graphics and
          Altair, where extensive research is carried out on VLSI Circuits &
          Systems and Post-CMOS Technologies. Our goal is to initiate, learn,
          realize and contribute to the understanding of real world problems
          through research and development in the challenging VLSI domain.
        </p>
      </div>

      <section className="my-8">
        <h2 className="text-2xl text-center font-bold mb-4 text-blue-800">
          EDA Tool Facility
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Card key={tool.name} className="h-full bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800">{tool.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-2">
                  {tool.features.map((feature) => (
                    <li key={feature}>
                      <Badge
                        variant="secondary"
                        className="font-normal bg-blue-100 text-blue-700"
                      >
                        {feature}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl text-center font-bold mb-4 text-blue-800">
          Workstation & PC
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {workstations.map((ws) => (
            <Card key={ws.name} className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800">{ws.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-12">
                    {/* Image Section */}
               <img
                src="/images/HPZ440.jpg"
                alt="Chip Layout"
                className="w-24 h-40 object-cover rounded-md shadow-md"
              />
              <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  {ws.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
                </div>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl text-center font-bold mb-4 text-blue-800">
          Chip Tapeout
        </h2>
        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">{chipLayout.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-12">
               {/* Image Section */}
               <img
                src="/images/Chip1.png"
                alt="Chip Layout"
                className="w-24 h-24 object-cover rounded-md shadow-md"
              />

              {/* List Section */}
              <ul className="list-disc pl-4 space-y-1 text-blue-700">
                {chipLayout.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
             
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="my-8">
        <h2 className="text-2xl text-center font-bold mb-4 text-blue-800">
          Collaborators (Present & Past)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborators.map((collaborator) => (
            <Card
              key={collaborator.name}
              className="bg-blue-50 hover:bg-blue-100 transition-colors duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative h-[102px] w-[89px]">
                  <Image
                    src={collaborator.photo}
                    alt={collaborator.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-800">
                    {collaborator.name}
                  </h3>
                  <p className="text-blue-700">{collaborator.title}</p>
                  <p className="text-green-600 text-sm">
                    {collaborator.affiliation}
                  </p>
                  <p className="text-blue-600 text-sm mt-2">
                    <span className="font-semibold">Designation:</span>{" "}
                    {collaborator.designation}
                  </p>
                  <p className="text-blue-600 text-sm">
                    <span className="font-semibold">Department:</span>{" "}
                    {collaborator.department}
                  </p>
                  <p className="text-blue-600 text-sm mt-2">
                    <span className="font-semibold">Research Interest:</span>{" "}
                    {collaborator.interests}
                  </p>
                  <p className="text-pink-500 text-sm mt-2">
                    {collaborator.email}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl text-center font-bold mb-4 text-blue-800">
          Lab Achievements / Gallery
        </h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-blue-50">
                    <CardContent className="p-4">
                      <div className="relative aspect-video mb-2">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <p className="text-sm text-blue-700 text-center">
                        {image.title}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}
