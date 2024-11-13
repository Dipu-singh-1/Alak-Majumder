import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Award, FileText, Users, Globe } from "lucide-react"

interface TimelineItemProps {
  icon: React.ReactNode
  children: React.ReactNode
}

function TimelineItem({ icon, children }: TimelineItemProps) {
  return (
    <div className="flex gap-4 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          {icon}
        </div>
        <div className="w-px flex-1 bg-border" />
      </div>
      <div className="flex-1 pt-1.5">
        {children}
      </div>
    </div>
  )
}

export default function ExperiencePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Professional Experience</h1>
      <Tabs defaultValue="employment" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
          <TabsTrigger value="employment">Employment</TabsTrigger>
          <TabsTrigger value="teaching">Teaching</TabsTrigger>
          <TabsTrigger value="awards">Awards</TabsTrigger>
          <TabsTrigger value="talks">Invited Talks</TabsTrigger>
          <TabsTrigger value="service">Professional Service</TabsTrigger>
          <TabsTrigger value="conferences">Conferences</TabsTrigger>
        </TabsList>

        <TabsContent value="employment">
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Employment History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
                  <h3 className="font-semibold">National Institute of Technology (NIT) Arunachal Pradesh, India</h3>
                  <p className="text-sm text-muted-foreground">Sept 2013 - Till Date</p>
                  <p>Assistant Professor, Department of Electronics & Communication Engineering</p>
                </TimelineItem>
                <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
                  <h3 className="font-semibold">The LNMIIT University, Jaipur, India</h3>
                  <p className="text-sm text-muted-foreground">July 2013 - Sept 2013</p>
                  <p>Assistant Professor, Department of Electronics & Communication Engineering</p>
                </TimelineItem>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teaching">
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Teaching Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Jan-Jun 2021: VLSI Design (4 Sem)</li>
                <li>Jul-Dec 2020: VLSI Lab, Circuit Design (5th Sem)</li>
                <li>Jan-Jun 2020: Electromagnetic Fields (4 Sem)</li>
                <li>Jul-Dec 2019: Digital Signal Processing (6th Sem)</li>
                <li>Jul-Dec 2020: Analog Circuits (3th Sem)</li>
                <li>Jul-Dec 2020: Digital Logic Design (3th Sem)</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="awards">
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Awards and Honors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <TimelineItem icon={<Award className="h-4 w-4" />}>
                  <h3 className="font-semibold">Korean Research Fellowship (Research Professor)</h3>
                  <p className="text-sm text-muted-foreground">June 2020 at Gist University, South Korea</p>
                </TimelineItem>
                <TimelineItem icon={<Award className="h-4 w-4" />}>
                  <h3 className="font-semibold">Best Paper Award</h3>
                  <p className="text-sm text-muted-foreground">15th IEEE International Conference on Electronics, Information, and Communication (ICEIC - 2017), Phuket, Thailand, 11-14th January 2017</p>
                </TimelineItem>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="talks">
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Invited Talks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Delivered a talk on &quot;Dynamic Power Gating for an IC&quot; in a Faculty Development Program on Recent Trends in VLSI Design at IIT Guwahati, India from 24-28 June 2019.</li>
                <li>Presented a talk on &quot;Adaptive Power Gating for Power Management&quot; in a Faculty Development Program on Exploring the modern trends in VLSI Design and IoT at NIT Arunachal Pradesh, India from 17-21 June 2019.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="service">
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Professional Service</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Reviewer in Journals/Magazines/Letters:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>IEEE Transactions on VLSI Systems</li>
                <li>IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)</li>
                <li>IEEE Consumer Electronics Magazine (CEM)</li>
                <li>Microelectronics Journal, Elsevier</li>
                <li>Journal of Circuits, Systems and Computers (JCSC), World Scientific Publishers</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conferences">
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Conference Participation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <TimelineItem icon={<Globe className="h-4 w-4" />}>
                  <h3 className="font-semibold">IEEE International Symposium on Circuits and Systems (ISCAS 2018)</h3>
                  <p className="text-sm text-muted-foreground">27-30 May 2018, Florence, Italy</p>
                </TimelineItem>
                <TimelineItem icon={<Globe className="h-4 w-4" />}>
                  <h3 className="font-semibold">IEEE International Conference on Electronics, Information, and Communication (ICEIC 2017)</h3>
                  <p className="text-sm text-muted-foreground">11-14 January 2017, Phuket, Thailand</p>
                </TimelineItem>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}