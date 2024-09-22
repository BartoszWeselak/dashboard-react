import React from "react";
import { Input } from "./Input";

interface FileUploadProps {
  handleAvatarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ handleAvatarChange }) => {
  return (
    <div>
      <Input
        type="file"
        id="file-upload"
        accept="image/png"
        onChange={handleAvatarChange}
        className="hidden"
      />
      <label
        htmlFor="file-upload"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer transition"
      >
        Select file to upload
      </label>
    </div>
  );
};

export default FileUpload;
