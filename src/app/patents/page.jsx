import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const filingUnderProcess = [
  {
    topic: "AI-Powered Energy Optimization System",
    team: "Green Tech Innovations",
    granter: "USPTO",
    dateFiled: "2023-05-15",
    applicationNumber: "US2023/123456"
  },
  {
    topic: "Blockchain-Based Supply Chain Verification",
    team: "Distributed Ledger Solutions",
    granter: "EPO",
    dateFiled: "2023-06-22",
    applicationNumber: "EP2023/789012"
  },
  {
    topic: "Quantum-Resistant Encryption Algorithm",
    team: "Cyber Security Frontiers",
    granter: "WIPO",
    dateFiled: "2023-07-03",
    applicationNumber: "PCT/IB2023/054321"
  },
  {
    topic: "Nano-Material for Flexible Solar Panels",
    team: "Sustainable Energy Labs",
    granter: "JPO",
    dateFiled: "2023-08-11",
    applicationNumber: "JP2023/246810"
  },
  {
    topic: "AI-Enhanced Natural Language Processing",
    team: "Cognitive Computing Group",
    granter: "USPTO",
    dateFiled: "2023-09-05",
    applicationNumber: "US2023/135790"
  }
]

const filingCompleted = [
  {
    topic: "Smart Grid Load Balancing System",
    team: "Power Distribution Innovations",
    granter: "USPTO",
    dateFiled: "2022-03-10",
    applicationNumber: "US2022/987654"
  },
  {
    topic: "Biodegradable Plastic Alternative",
    team: "Eco-Materials Research",
    granter: "EPO",
    dateFiled: "2022-05-20",
    applicationNumber: "EP2022/246810"
  }
]

export default function Patents() {
  return (
    <div className="container mx-auto py-12 bg-sky-50">
      <h1 className="text-4xl font-bold text-center mb-12 text-sky-900">Our Patents</h1>
      <Tabs defaultValue="under-process" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="under-process" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">Filing Under Process</TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">Filing Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="under-process">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filingUnderProcess.map((patent, index) => (
              <PatentCard key={index} {...patent} status="under-process" />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filingCompleted.map((patent, index) => (
              <PatentCard key={index} {...patent} status="completed" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function PatentCard({ topic, team, granter, dateFiled, applicationNumber, status }) {
  return (
    <Card className="w-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-gray-100 border-b border-sky-200">
        <CardTitle className="text-lg font-semibold text-sky-900">{topic}</CardTitle>
        <Badge 
          variant={status === "completed" ? "default" : "secondary"} 
          className={status === "completed" ? "bg-green-500" : "bg-sky-500"}
        >
          {status === "completed" ? "Filing Completed" : "Under Process"}
        </Badge>
      </CardHeader>
      <CardContent className="pt-4 space-y-2">
        <p className="text-sky-800"><span className="font-semibold">Team:</span> {team}</p>
        <p className="text-sky-800"><span className="font-semibold">Patent Granter:</span> {granter}</p>
        <p className="text-sky-800"><span className="font-semibold">Date Filed:</span> {dateFiled}</p>
        <p className="text-sky-800"><span className="font-semibold">Application Number:</span> {applicationNumber}</p>
      </CardContent>
    </Card>
  )
}

