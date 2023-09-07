"use client";
import { useState } from "react";
import { CldImage, CldUploadButton } from "next-cloudinary";
type UploadImage = {
  event: {
    info: {
      public_id: string;
    };
    event: "success";
  };
};
export default function Home() {
  const [imagePublicUrl, setImagePublicUrl] = useState("a1nznq83bp6gwivhnnyg");
  return (
    <main className="flex items-center justify-center h-screen">
      <CldUploadButton
        onUpload={(result: any) => {
          console.log(result);
          setImagePublicUrl(result.info.public_id);
        }}
        uploadPreset="ryc4prfw"
      />
      {imagePublicUrl && (
        <CldImage
          width="200"
          height="300"
          src={imagePublicUrl}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
      {/* <CldImage src="<Public ID>" alt="images" /> */}
    </main>
  );
}
