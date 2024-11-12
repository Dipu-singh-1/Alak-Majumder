import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const completedProjects = [
  {
    title: "Project Alpha",
    points: [
      "Implemented AI-powered analytics",
      "Increased efficiency by 40%",
      "Integrated with existing systems",
      "Launched to 100+ beta users",
      "Received positive feedback"
    ]
  },
  {
    title: "Project Beta",
    points: [
      "Developed blockchain supply chain",
      "Reduced transaction costs by 30%",
      "Improved traceability",
      "Implemented smart contracts",
      "Successfully deployed to production"
    ]
  }
]

const ongoingProjects = [
  {
    title: "Project Gamma",
    points: [
      "Developing next-gen IoT device",
      "Integrating machine learning algorithms",
      "Designing user-friendly interface",
      "Conducting beta testing",
      "Preparing for market launch"
    ]
  },
  {
    title: "Project Delta",
    points: [
      "Building predictive maintenance model",
      "Collecting and analyzing sensor data",
      "Optimizing algorithm performance",
      "Developing dashboard for insights",
      "Planning integration with client systems"
    ]
  },
  {
    title: "Project Epsilon",
    points: [
      "Creating AR educational app",
      "Designing interactive 3D models",
      "Developing curriculum integration",
      "Testing with focus groups",
      "Preparing for app store submission"
    ]
  },
  {
    title: "Project Zeta",
    points: [
      "Implementing cloud-based solution",
      "Designing scalable architecture",
      "Developing microservices",
      "Ensuring data security compliance",
      "Conducting performance testing"
    ]
  },
  {
    title: "Project Eta",
    points: [
      "Creating AI chatbot for customer service",
      "Training natural language processing model",
      "Integrating with CRM systems",
      "Developing multi-language support",
      "Planning phased rollout strategy"
    ]
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto py-12 bg-sky-50">
      <h1 className="text-4xl font-bold text-center mb-12 text-sky-900">Our Projects</h1>
      <Tabs defaultValue="ongoing" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="completed" className="data-[state=active]:bg-sky-200 data-[state=active]:text-sky-900">Completed Projects</TabsTrigger>
          <TabsTrigger value="ongoing" className="data-[state=active]:bg-sky-200 data-[state=active]:text-sky-900">Ongoing Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="completed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedProjects && completedProjects.length > 0 ? (
              completedProjects.map((project, index) => (
                <ProjectCard key={index} {...project} status="completed" />
              ))
            ) : (
              <p className="text-sky-800 col-span-2 text-center">No completed projects at the moment.</p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="ongoing">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ongoingProjects && ongoingProjects.length > 0 ? (
              ongoingProjects.map((project, index) => (
                <ProjectCard key={index} {...project} status="ongoing" />
              ))
            ) : (
              <p className="text-sky-800 col-span-2 text-center">No ongoing projects at the moment.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProjectCard({ title, points, status }) {
  return (
    <Card className="w-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-sky-100 border-b border-sky-200">
        <CardTitle className="flex justify-between items-center text-sky-900">
          {title}
          <Badge variant={status === "completed" ? "default" : "secondary"} className="bg-sky-500 hover:bg-sky-600">
            {status === "completed" ? "Completed" : "Ongoing"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        {points && points.length > 0 ? (
          <ul className="list-disc pl-5 space-y-2">
            {points.map((point, index) => (
              <li key={index} className="text-sky-800">{point}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sky-800">No project details available.</p>
        )}
      </CardContent>
    </Card>
  )
}