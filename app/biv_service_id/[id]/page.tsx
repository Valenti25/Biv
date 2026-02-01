import { servicesData } from "@/app/biv_service_id/data/bivservices";
import { ServiceData } from "@/app/biv_service_id/types/bivservice";
import Link from "next/link";
import Image from "next/image";

type serviceKey = keyof typeof servicesData;
export default function ServicePage({ params }: { params: { id: string } }) {
  const serviceId = params.id as serviceKey;
  const service = servicesData[serviceId] as ServiceData;

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-400 mb-2">
          ไม่พบข้อมูลบริการนี้
        </h1>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          กลับหน้าแรก
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto w-full bg-white min-h-screen shadow-2xl relative font-sans text-gray-800">
      
      {/* ส่วนรูปภาพปก */}
      <div className="relative w-full h-64">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <Link
          href="/"
          className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </Link>
      </div>

      <div className="p-5 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900">{service.title}</h1>
        {service.description && (
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            {service.description}
          </p>
        )}
      </div>

      <div className="pb-24">
        {service.formSections.map((section) => (
          <div
            key={section.id}
            className="p-5 border-b border-gray-100 last:border-0"
          >
            <h3 className="font-bold text-lg mb-4 text-gray-800">
              {section.title}
            </h3>

            <div className="space-y-3">
              {section.options.map((option, idx) => (
                <label
                  key={idx}
                  className="flex items-start justify-between group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors -mx-2"
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 border-2 border-gray-300 rounded text-green-600 focus:ring-green-500 cursor-pointer"
                    />

                    <div>
                      <div className="text-base font-medium text-gray-700 group-hover:text-green-700 transition">
                        {option.label}
                      </div>

                      {/* จุดที่เคย Error: ตอนนี้หายแล้วครับ เพราะ interface บอกว่ามีหรือไม่มีก็ได้ */}
                      {option.description && (
                        <div className="text-xs text-gray-400 mt-0.5 font-light">
                          {option.description}
                        </div>
                      )}
                    </div>
                  </div>

                  {option.price > 0 && (
                    <div className="font-bold text-gray-700 whitespace-nowrap pl-2">
                      {option.price.toLocaleString()} ฿
                    </div>
                  )}
                </label>
              ))}
            </div>
          </div>
        ))}

        {service.hasDocumentUpload && (
          <div className="p-5 bg-gray-50 mt-2 border-t border-gray-100">
            <h3 className="font-bold text-gray-800 mb-1">
              {service.documentLabel}
            </h3>
            <p className="text-xs text-gray-500 mb-3">{service.documentDesc}</p>
            <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:bg-white hover:border-green-500 hover:text-green-600 transition flex items-center justify-center gap-2">
              <span>📄 แนบเอกสาร</span>
            </button>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 max-w-md mx-auto shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <button className="w-full bg-green-600 text-white font-bold text-lg py-3 rounded-xl hover:bg-green-700 transition">
          ดำเนินการต่อ
        </button>
      </div>
    </div>
  );
}