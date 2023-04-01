import React, { useState } from 'react';




const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="file-input" className="mb-2 font-bold">Upload File:</label>
      <input id="file-input" type="file" className="mb-4" onChange={handleFileInputChange} />
      {selectedFile && (
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">File Name</th>
              <th className="px-4 py-2">File Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">{selectedFile.name}</td>
              <td className="border px-4 py-2">{selectedFile.size} bytes</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FileUploader;