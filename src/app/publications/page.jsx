import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const publicationTypes = [
  { type: "Books", count: 2 },
  { type: "Book Chapters", count: 2 },
  { type: "Journals/Letters/Magazines", count: 39 },
  { type: "Conferences", count: 45 },
]

const publications = {
  Books: [
    {
      title: "Arithmetic Circuits: Trends and Applications",
      authors: "D. Nandan, B.K. Mohanty, A. Majumder, S. Gorgin",
      publisher: "CRC Press, Taylor & Francis",
      year: 2021,
      note: "Contract Signed"
    },
    {
      title: "Electronic Systems and Intelligent Computing - Proceedings of ESIC 2020",
      authors: "P.K. Mallick, P.S. Meher, P. A. Majumder, S.K. Das",
      publisher: "Springer Nature",
      year: 2020,
      doi: "10.1007/978-981-15-7031-5",
      isbn: "978-981-15-7031-5"
    }
  ],
  "Book Chapters": [
    {
      title: "Junctionless Transistors: Evolution and Prospects",
      authors: "T. Pokhrel, A. Majumder",
      book: "Nanoscale Semiconductor: Materials, Devices and Circuits",
      publisher: "CRC Press, Taylor & Francis Group",
      year: 2022,
      isbn: "978-1-00331-137-9"
    },
    {
      title: "Understanding of On-chipPower Supply Noise: Suppression Methodologies and Challenges",
      authors: "P. Bhattacharjee, A. Majumder",
      book: "Clock Synchronization",
      publisher: "InTech Open, UK",
      year: 2020,
      isbn: "978-1-83881-040-5"
    }
  ],
  "Journals/Letters/Magazines": [
    {
      title: "Enhancing intrusion detection using wireless sensor networks: A novel ahp-madm aggregated multiple type 3 fuzzy logic-based k-barriers prediction system",
      authors: "A. Tarafdar, A. Sheikh, P. Majumder, A. Baidya, A. Majumder, B.K Bhattacharyya, U.K. Bera",
      journal: "Peer-to-Peer Networking and Applications",
      publisher: "Springer",
      year: 2024,
      doi: "10.1007/s12083-024-01688-w"
    },
    {
      title: "Time Domain and Area Efficient Smart Temperature Sensor Exploiting Channel Length Modulation Coefficient",
      authors: "K. Chakraborty, A. Majumder, A.J Mondal",
      journal: "Journal of Circuits, Systems and Computers",
      publisher: "World Scientific Publisher",
      year: 2024,
      doi: "10.1142/S0218126624502384"
    },
    // Add more journal publications here...
  ],
  Conferences: [
    {
      title: "Exploring Dual threshold in a Double Gated TIG JLT for a logic Application",
      authors: "T. Pokhrel, A. Majumder",
      conference: "8th IEEE Electron Devices Technology and Manufacturing Conference (EDTM 2024)",
      location: "Bangalore, India",
      date: "03-06 March 2023"
    },
    {
      title: "Design of VFC with Programmable Frequency Ramp to control on-chip switching current profile",
      authors: "P Bhattacharjee, A. Majumder",
      conference: "37th IEEE International Conference on VLSI Design (VLSID 2024)",
      location: "Kolkata, India",
      date: "6-10 January 2024",
      doi: "10.1109/VLSID60093.2024.00104",
      note: "Nominated for Best Paper Award"
    },
    // Add more conference publications here...
  ]
}

export default function PublicationPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Publications</h1>
      <p className="text-sm text-gray-500 text-center mb-8 italic">
        <span className="text-red-600">Disclaimer:</span> This material is presented to ensure timely dissemination of scholarly and technical work. 
        Copyright and all rights therein are retained by authors or by other copyright holders. All persons 
        copying this information are expected to adhere to the terms and constraints invoked by each author&apos;s 
        copyright. In most cases, these works may not be reposted without the explicit permission of the 
        copyright holder.
      </p>
      
      <Tabs defaultValue="Books" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 ">
          {publicationTypes.map(({ type, count }) => (
            <TabsTrigger key={type} value={type}>
              {type} <Badge variant="secondary" className="ml-2">{count}</Badge>
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(publications).map(([type, items]) => (
          <TabsContent key={type} value={type}>
            <ScrollArea className="h-[600px] w-full rounded-md border p-4 bg-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {items.map((pub, index) => (
                  <PublicationCard key={index} publication={pub} type={type} />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function PublicationCard({ publication, type }) {
  return (
    <Card className="w-full bg-blue-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{publication.title}</CardTitle>
        <CardDescription>{publication.authors}</CardDescription>
      </CardHeader>
      <CardContent>
        {type === "Books" && (
          <>
            <p>{publication.publisher}, {publication.year}</p>
            {publication.doi && <p>DOI: {publication.doi}</p>}
            {publication.isbn && <p>ISBN: {publication.isbn}</p>}
            {publication.note && <p className="italic mt-2">{publication.note}</p>}
          </>
        )}
        {type === "Book Chapters" && (
          <>
            <p>In: {publication.book}</p>
            <p>{publication.publisher}, {publication.year}</p>
            <p>ISBN: {publication.isbn}</p>
          </>
        )}
        {type === "Journals/Letters/Magazines" && (
          <>
            <p>{publication.journal}</p>
            <p>{publication.publisher}, {publication.year}</p>
            <p>DOI: {publication.doi}</p>
          </>
        )}
        {type === "Conferences" && (
          <>
            <p>{publication.conference}</p>
            <p>{publication.location}, {publication.date}</p>
            {publication.doi && <p>DOI: {publication.doi}</p>}
            {publication.note && <p className="italic mt-2">{publication.note}</p>}
          </>
        )}
      </CardContent>
    </Card>
  )
}