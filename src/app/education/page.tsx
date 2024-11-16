"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileIcon, UploadIcon, SearchIcon, FolderIcon } from "lucide-react";

export default function StudyMaterials() {
  const [materials, setMaterials] = React.useState<any[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  // Filter materials based on search term
  const filteredMaterials = materials.filter((material) =>
    material.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle file upload
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newMaterial = {
        id: materials.length + 1,
        name: file.name,
        type: file.name.split(".").pop() || "",
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        lastModified: new Date().toISOString().split("T")[0],
        fileUrl: URL.createObjectURL(file), // Generate an object URL for the uploaded file
      };
      setMaterials([...materials, newMaterial]);
    }
  };

  // Handle file view
  const handleView = (materialId: number) => {
    const material = materials.find((m) => m.id === materialId);
    if (material) {
      window.open(material.fileUrl, "_blank"); // Open the file in a new tab
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-blue-900 p-6">
          <h1 className="text-3xl font-bold text-white">Study Materials</h1>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="relative w-full md:w-1/2">
              <Input
                type="text"
                placeholder="Search materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <SearchIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <div className="flex items-center gap-4">
              {/* <Button className="bg-blue-900 hover:bg-blue-600">
                <FolderIcon className="mr-2 h-4 w-4" /> New Folder
              </Button> */}
              <div>
                <Input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleUpload}
                />
                <Label
                  htmlFor="file-upload"
                  className="bg-blue-900 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 inline-flex items-center"
                >
                  <UploadIcon className="mr-2 h-4 w-4" /> Upload File
                </Label>
              </div>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMaterials.map((material) => (
                <TableRow key={material.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <FileIcon className="mr-2 h-4 w-4 text-blue-500" />
                      {material.name}
                    </div>
                  </TableCell>
                  <TableCell>{material.type.toUpperCase()}</TableCell>
                  <TableCell>{material.size}</TableCell>
                  <TableCell>{material.lastModified}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleView(material.id)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
