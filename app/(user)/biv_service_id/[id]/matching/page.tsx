"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, MapPin, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function MatchingPage() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(4);

  // นับถอยหลัง 4 วินาที
  useEffect(() => {
    if (step === 1) {
      if (count > 0) {
        const timer = setTimeout(() => setCount(count - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => setStep(2), 0);
      }
    }
  }, [count, step]);

  // จำลองการหาคนขับ
  useEffect(() => {
    if (step === 2) {
      const timer = setTimeout(() => {
        setStep(3); 
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden font-sans">
      
      <div className="absolute inset-0 bg-gray-200 opacity-50 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_0_8px_rgba(34,197,94,0.2)]"></div>
      </div>

      <div className="absolute top-4 left-4 z-20">
        <button onClick={() => router.back()} className="bg-white p-2 rounded-full shadow-md">
          <X className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-10 min-h-[300px]">
        
        {step === 1 && (
          <div className="p-8 flex flex-col items-center justify-center h-full space-y-6">
            <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center">
              <span className="text-4xl font-bold text-green-600">{count}</span>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-900">กำลังส่งคำขอ...</h2>
              <p className="text-sm text-gray-500">เปลี่ยนใจไหม? กดยกเลิกได้นะ</p>
            </div>
            <button onClick={() => router.back()} className="w-full bg-gray-100 text-gray-600 font-bold py-3 rounded-xl hover:bg-gray-200">
              ยกเลิก
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="p-8 flex flex-col items-center justify-center h-full space-y-6">
            <div className="relative w-24 h-24 flex items-center justify-center">
               <div className="z-10 bg-green-500 p-4 rounded-full shadow-lg">
                 <MapPin className="w-8 h-8 text-white" />
               </div>
               {[0, 1].map((i) => (
                 <motion.div
                   key={i}
                   className="absolute border border-green-500 rounded-full bg-green-100/30"
                   initial={{ width: 50, height: 50, opacity: 1 }}
                   animate={{ width: 200, height: 200, opacity: 0 }}
                   transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
                 />
               ))}
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-900">กำลังค้นหาคนขับ...</h2>
              <p className="text-sm text-gray-500">ใกล้เจอแล้ว รอสักครู่</p>
            </div>
            <button onClick={() => router.back()} className="w-full border border-gray-300 py-3 rounded-xl text-gray-500">
               ยกเลิกการค้นหา
            </button>
          </div>
        )}
        {step === 3 && (
          <div className="p-5">
             
             <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-900">ผู้ดูแลกำลังเดินทางไปหาคุณ</h2>
                <p className="text-sm text-gray-500">คาดว่าจะถึงระหว่างเวลา 19:00-19:30 น.</p>
                
                <div className="flex items-center justify-between mt-4 px-2">
                   <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-[#00C260] border-2 border-white shadow-sm z-10"></div>
                      <span className="text-[10px] font-bold text-gray-800">รับงาน</span>
                   </div>
                   <div className="h-2 flex-1 bg-[#00C260] -mx-2"></div>
                   
                   <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-[#00C260] border-2 border-white shadow-sm z-10"></div>
                      <span className="text-[10px] font-bold text-gray-800">กำลังเดินทาง</span>
                   </div>
                   <div className="h-2 flex-1 bg-[#333333] -mx-2"></div>

                   <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-[#333333] border-2 border-white shadow-sm z-10"></div>
                      <span className="text-[10px] text-gray-500">ให้บริการ</span>
                   </div>
                   <div className="h-2 flex-1 bg-[#333333] -mx-2"></div>

                   <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-[#333333] border-2 border-white shadow-sm z-10"></div>
                      <span className="text-[10px] text-gray-500">เสร็จสิ้น</span>
                   </div>
                </div>
             </div>

             <hr className="border-gray-100 mb-4" />
             <div className="border border-gray-200 rounded-xl p-4 flex gap-4 shadow-sm mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-2xl">👨🏻‍✈️</div>
                </div>
                <div className="flex-1">
                   <h3 className="font-bold text-gray-900 text-sm">สมชาย ใจดี</h3>
                   <p className="text-xs text-gray-500 mb-1">อายุ 22</p>
                   <p className="text-xs text-gray-800 font-bold">ประเภทรถ : รถจักรยานยนต์</p>
                   <p className="text-xs text-gray-500">ทะเบียนรถ : กข 1234 กรุงเทพมหานคร</p>
                </div>
             </div>

             <div className="mb-2">
                <span className="font-bold text-sm text-gray-900">เวลาที่เหลือของบริการนี้: 00:00 น.</span>
                <p className="text-[10px] text-gray-500">
                   หากต้องการขยายเวลา กรุณา <span className="text-[#00C260] font-bold cursor-pointer">ติดต่อฝ่ายดูแลลูกค้า Biv</span>
                </p>
             </div>

             <div className="relative pl-2 space-y-6 mt-4">
                <div className="absolute left-[15px] top-2 bottom-6 w-[2px] bg-gray-200"></div>

                <div className="flex items-center justify-between relative">
                   <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center z-10">
                         <MapPin className="w-3.5 h-3.5 text-gray-800" />
                      </div>
                      <span className="text-sm font-bold text-gray-700">สมชาย ใจดี</span>
                   </div>
                   <button className="bg-[#333333] text-white text-xs px-4 py-1.5 rounded-full flex items-center gap-1 hover:bg-black transition">
                      <Phone className="w-3 h-3" /> ติดต่อ
                   </button>
                </div>

                <div className="flex items-center gap-3 relative">
                   <div className="w-7 h-7 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center z-10">
                      <MapPin className="w-3.5 h-3.5 text-gray-800" />
                   </div>
                   <p className="text-xs font-bold text-gray-800 leading-relaxed max-w-[80%]">
                      โรงพยาบาล... 00/4 หมู่0 มะลวน พุนพิน สุราษฎร์ธานี
                   </p>
                </div>
             </div>

             <div className="absolute bottom-6 right-6">
                <button className="w-14 h-14 bg-[#00C260] rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition">
                   <MessageCircle className="w-7 h-7 text-white" />
                </button>
             </div>

          </div>
        )}

      </div>
    </div>
  );
}