"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-14 md:pt-20">
      <div>
        <div className="flex justify-center mb-5">
          <span className="p-1.5 border-2 rounded-full">
            <Image
              src="/images/photo.jpg"
              width={200}
              height={200}
              alt=""
              className="w-18 md:w-40 h-18 md:h-40 bg-neutral-500 rounded-full"
            />
          </span>
        </div>
        <h1 className="opacity-60 font-bold text-xl text-center mb-4">
          Hi! I’m Oleksandr Veselyi
        </h1>
        <div className=" grid gap-2 text-center max-w-[600px] mx-auto">
          <p>
            I’m 23 years old and a Front-end Developer specializing in creating
            modern and efficient web applications. I’m constantly improving my
            skills and always open to new challenges to grow and deliver
            high-quality products.
          </p>
          <p className="opacity-30 text-sm">
            Feel free to check out my projects and get in touch for
            collaboration!
          </p>
        </div>
      </div>
      <div>
        <ul></ul>
      </div>
    </div>
  );
}
