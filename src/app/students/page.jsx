import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail } from "lucide-react";

const students = {
  phd: [
    {
      name: "Vijay Pratap Yadav",
      position: "PhD Scholar",
      areaOfWork: "Quantum Computing",
      coSupervisor: "Dr. Jane Smith",
      workTenure: "September 2021 - Present",
      image: "/images/Vijay_MTech.jpg",
    },
    {
      name: "Pritam",
      position: "PhD Researcher",
      areaOfWork: "Machine Learning",
      coSupervisor: "Prof. Bob Williams",
      workTenure: "October 2020 - Present",
      image: "/images/Pritam_PhD.jpg",
    },
  ],
  projectStaff: [
    {
      name: "Jyoti Kandpal",
      position: "Research Engineer",
      areaOfWork: "Digital IC Design",
      coSupervisor: "NA",
      workTenure: "March 2021 - Till Date",
      image: "/images/Jyoti.gif",
    },
    {
      name: "Shailesh Kumar",
      position: "Junior Research Fellow",
      areaOfWork: "Digital IC, Power Supply Noise",
      coSupervisor: "NA",
      workTenure: "March 2021 - Till Date",
      image: "/images/Shailesh.jpg",
    },
  ],
  mtech: [
    {
      name: "Pallabi",
      position: "M-Tech",
      areaOfWork: "Digital VLSI Circuit",
      coSupervisor: "NA",
      workTenure: "March 2021 - Till Date",
      image: "/images/pallabi_M-Tech.jpg",
    },
    {
      name: "Anu Singh",
      position: "M-Tech",
      areaOfWork: "Digital VLSI Circuit",
      coSupervisor: "NA",
      workTenure: "March 2021 - Till Date",
      image: "/images/Anu_MTech.png",
    },
  ],
  btech: [
    {
      name: "Rahul Sharma",
      position: "B-Tech",
      areaOfWork: "Embedded Systems",
      coSupervisor: "NA",
      workTenure: "August 2022 - Present",
      image: "/images/rahul.jpg",
    },
    {
      name: "Priya Patel",
      position: "B-Tech",
      areaOfWork: "IoT Applications",
      coSupervisor: "NA",
      workTenure: "August 2022 - Present",
      image: "#",
    },
  ],
};

export default function Students() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Students</h1>
      <Tabs defaultValue="phd" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="phd">PhD</TabsTrigger>
          <TabsTrigger value="projectStaff">Project Staff</TabsTrigger>
          <TabsTrigger value="mtech">M.Tech</TabsTrigger>
          <TabsTrigger value="btech">B.Tech</TabsTrigger>
        </TabsList>
        {Object.entries(students).map(([category, categoryStudents]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryStudents.map((student, index) => (
                <StudentCard key={index} {...student} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function StudentCard({
  name,
  position,
  areaOfWork,
  coSupervisor,
  workTenure,
  image,
}) {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
    : "?";

  return (
    <Card className="w-full">
      <CardContent className="flex items-start space-x-4 pt-6 bg-teal-400">
        <Avatar className="w-24 h-24">
          <AvatarImage src={image} alt={name || "Student"} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-blue-600">
                {name || "Unknown Student"}
              </h3>
              <p className="text-sm text-gray-500">
                {position || "Position not specified"}
              </p>
            </div>
            <a
              href="mailto:youremail@example.com"
              className="inline-flex items-center"
            >
              <Mail className="w-5 h-5 text-red-400 cursor-pointer" />
            </a>
          </div>
          <div className="mt-2 space-y-1">
            <p className="text-sm">
              <span className="font-semibold">Area of Work:</span>{" "}
              {areaOfWork || "Not specified"}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Co-Supervisor:</span>{" "}
              {coSupervisor || "Not specified"}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Work Tenure:</span>{" "}
              {workTenure || "Not specified"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
