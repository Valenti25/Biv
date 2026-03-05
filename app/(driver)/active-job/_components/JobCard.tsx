"use client";

import { useState, useRef, ChangeEvent } from "react";
import { CarFront, MapPin, Flag, Plus, X, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function JobCard() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [documents, setDocuments] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; 
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setDocuments([...documents, imageUrl]);
    }
  };

  const handleDeleteImage = (indexToRemove: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setDocuments(documents.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="shadow-sm p-4 rounded-md border border-gray-light bg-white relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-pink flex items-center justify-center rounded-md">
            <CarFront className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-pink font-semibold text-sm">BivRide</span>
            <p className="text-xs text-gray-dark">ตัวเลือก : ไปตามนัด</p>
          </div>
        </div>
        <div>
          <span className="text-sm text-gray-dark">ความเร่งด่วน</span>
          <p className="text-xs text-orange">Quickie (20-40) นาที</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col">
        <div className="text-xs space-x-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-green" />
            <div className="max-w-[250px]">
              <p className="text-gray-dark break-all">
                วัดพระศรีรัตนศาสดารามราชวรมหาวิหาร
              </p>
            </div>
          </div>
          <span className="text-gray">1.3 ก.ม.</span>
        </div>

        <span className="border-l border-dashed border-black h-4 ml-2 my-1.5" />

        <div className="text-xs space-x-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Flag className="w-4 h-4 text-pink" />
            <div className="max-w-[250px]">
              <p className="text-gray-dark break-all">
                พระที่นั่งสรรเพชญปราสาทอยุธยา
              </p>
            </div>
          </div>
          <span className="text-gray">3.3 ก.ม.</span>
        </div>
      </div>

      <div className="w-full flex justify-end mx-auto my-2">
        <p className="text-xs text-blue font-bold">ปลายทาง: 250 บาท</p>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-pink font-bold cursor-pointer"
        >
          {isExpanded ? "ซ่อนรายละเอียดการบริการ" : "อ่านรายละเอียดการบริการ"}
        </button>
        <button className="bg-green-light text-white h-7.5 w-20 p-0.5 rounded-lg text-xs font-bold">
          รับงาน
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-gray-light space-y-4">
              <div>
                <h4 className="text-pink font-bold text-sm mb-2">
                  ความต้องการพิเศษ
                </h4>
                <p className="text-gray-dark text-xs break-all leading-relaxed">
                  mapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmap
                </p>
              </div>

              <div>
                <h4 className="text-pink font-bold text-sm mb-2">
                  เอกสารที่จำเป็น
                </h4>
                
                <div className="flex gap-2 overflow-x-auto pb-2 items-center">
                  
                  {documents.map((imgUrl, index) => (
                    <div
                      key={index}
                      className="w-[70px] h-[50px] shrink-0 relative rounded-md overflow-hidden border border-gray-light"
                    >
                      <img 
                        src={imgUrl} 
                        alt={`doc-${index}`} 
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => setSelectedImage(imgUrl)}
                      />

                      <button
                        onClick={(e) => handleDeleteImage(index, e)}
                        className="absolute top-1 right-1 bg-white/90 hover:bg-red-500 hover:text-white text-gray-700 rounded-sm p-0.5 transition-all duration-200 z-10 shadow-sm"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-[70px] h-[50px] shrink-0 rounded-md border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-5 h-5 text-gray-500" />
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-3xl w-full flex justify-center items-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img
                src={selectedImage}
                alt="Selected document"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}