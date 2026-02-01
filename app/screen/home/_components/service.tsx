import React from "react";
import Link from "next/link"; // 1. นำเข้า Link ของ Next.js

// 2. เพิ่ม id ให้กับข้อมูลแต่ละตัว (id นี้จะถูกส่งไปที่ [id]/page.tsx)
const services = [
  {
    id: "biv-ride", 
    title: "Biv Ride",
    image: "/images/ride.jpg", 
  },
  {
    id: "biv-buddy",
    title: "Biv Buddy",
    image: "/images/buddy.jpg", 
  },
  {
    id: "biv-daily",
    title: "Biv Daily",
    image: "/images/daily.jpg", 
  },
  {
    id: "biv-beside",
    title: "Biv Beside",
    image: "/images/beside.jpg", 
  },
];

export default function PopularServices() {
  return (
    <div className="max-w-md mx-auto p-4 font-sans">
      <h2 className="text-lg font-bold text-gray-800 mb-4">บริการยอดนิยม</h2>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {services.map((service) => (
          /* 3. ใช้ Link หุ้มแทน div และส่ง href ไปตาม id */
          <Link 
            href={`/service/${service.id}`} 
            key={service.id}
            className="relative h-28 rounded-xl overflow-hidden cursor-pointer group shadow-sm block" // เพิ่ม block เพื่อให้เต็มพื้นที่
          >
            {/* รูปภาพพื้นหลัง */}
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">
                {service.title}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <button className="w-full py-2 bg-green text-white text-xl font-medium rounded-xl">
        เพิ่มเร็วๆ นี้
      </button>
    </div>
  );
}