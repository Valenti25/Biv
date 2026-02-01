import React from "react";
import { MapPin, MessageSquare, Clock, BadgeCheck } from "lucide-react";
const features = [
  {
    title: "จับคู่ผู้ดูแลในพื้นที่ใกล้คุณ",
    desc: "ระบบหาผู้ดูแลที่อยู่ใกล้ เพื่อความสะดวกและรวดเร็ว",
    icon: <MapPin size={24} />,
  },
  {
    title: "Realtime Chat & Tracking",
    desc: "ติดตามสถานะบริการ และแชทกับผู้ดูแลแบบเรียลไทม์",
    icon: <MessageSquare size={24} />,
  },
  {
    title: "เรียกใช้บริการได้ทันที",
    desc: "รองรับทั้งการใช้งานแบบเร่งด่วน และการนัดล่วงหน้า",
    icon: <Clock size={24} />,
  },
  {
    title: "Verified Profiles",
    desc: "ผู้ดูแลทุกคนผ่านการตรวจสอบ พร้อมสัญลักษณ์ Verified Badge",
    icon: <BadgeCheck size={24} />,
  },
];

export default function Features() {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      {/* ใช้ Grid 2 คอลัมน์บนจอใหญ่ และ 1 คอลัมน์บนมือถือ */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-2 group">
            {/* ส่วนของ Icon: ใช้สี Gradient ที่เราตั้งค่าไว้ */}
            <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-gray-700">
              {item.icon}
            </div>

            {/* ส่วนของข้อความ */}
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-sm text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}