"use client";
import {
  X,
  Map,
  ChevronRight,
  MapPin,
  SquarePen,
  Plus,
  PlusCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddressPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-10">
      <div className="bg-white px-4 py-3 flex items-center shadow-sm sticky top-0 z-10">
        <button onClick={() => router.back()} className="p-1">
          <X className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-green-500">
            <Map className="w-6 h-6" />
          </div>
          <span className="text-sm font-medium">ค้นหาที่อยู่ในแมพ</span>
        </div>
        <button className="bg-green-600 rounded-full p-1 hover:bg-green-500 transition">
          <ChevronRight className="w-5 h-5 text-gray-900" />
        </button>
      </div>

      <div className="bg-white flex border-b border-gray-200 text-sm font-medium">
        <button className="flex-1 py-3 border-b-2 border-gray-800 text-gray-900">
          ที่อยู่ของฉัน
        </button>
        <button className="flex-1 py-3 border-b-2 border-transparent text-green-600 hover:bg-gray-50">
          ดูทั้งหมด
        </button>
      </div>

      <div className="divide-y divide-gray-100 bg-white">
        <div className="p-4 flex gap-3">
          <div className="mt-1">
            <MapPin className="w-5 h-5 text-gray-800" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-gray-900 text-sm">นายสมดี คนดี</p>
                <p className="text-gray-900 font-bold text-sm mt-1">
                  0611232231
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-2 leading-relaxed max-w-[90%]">
              โรงพยาบาล... 00/4 หมู่0 มะลวน พุนพิน สุราษฎร์ธานี
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <button className="text-gray-800 p-1 hover:text-green-600">
              <SquarePen className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-4 flex gap-3">
          <div className="mt-1">
            <MapPin className="w-5 h-5 text-gray-800" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-gray-900 text-sm">นายสมดี คนดี</p>
                <p className="text-gray-900 font-bold text-sm mt-1">
                  0611232231
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-2 leading-relaxed max-w-[90%]">
              โรงพยาบาล... 00/4 หมู่0 มะลวน พุนพิน สุราษฎร์ธานี
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <button className="text-gray-800 p-1 hover:text-green-600">
              <SquarePen className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 bg-white">
        <button className="w-full bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium shadow-sm hover:bg-gray-700 transition">
          <div className="bg-white rounded-full p-0.5">
            <Plus className="w-4 h-4 text-gray-800" />
          </div>
          เพิ่มที่อยู่ใหม่
        </button>
      </div>

      <div className="p-4 text-xs font-bold text-gray-900 bg-white border-t border-gray-100">
        ที่อยู่ที่เคยใช้
      </div>

      <div className="divide-y divide-gray-100 bg-white">
        <div className="p-4 flex gap-3">
          <div className="mt-1">
            <MapPin className="w-5 h-5 text-gray-800" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-gray-900 text-sm">นายสมดี คนดี</p>
                <p className="text-gray-900 font-bold text-sm mt-1">
                  0611232231
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-2 leading-relaxed max-w-[90%]">
              โรงพยาบาล... 00/4 หมู่0 มะลวน พุนพิน สุราษฎร์ธานี
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <button className="text-green-500 hover:text-green-600">
              <PlusCircle className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-4 flex gap-3 border-b border-gray-100">
          <div className="mt-1">
            <MapPin className="w-5 h-5 text-gray-800" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-gray-900 text-sm">นายสมดี คนดี</p>
                <p className="text-gray-900 font-bold text-sm mt-1">
                  0611232231
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-2 leading-relaxed max-w-[90%]">
              โรงพยาบาล... 00/4 หมู่0 มะลวน พุนพิน สุราษฎร์ธานี
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
