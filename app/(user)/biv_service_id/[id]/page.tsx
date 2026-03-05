import { servicesData } from "@/app/(user)/biv_service_id/data/bivservices";
import Hr from "@/app/components/hr";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, MapPin } from "lucide-react";

export default async function ServicePage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const serviceId = params.id;

  const service = servicesData[serviceId];

  return (
    <div className="bg-white relative font-sans text-gray-800">
      <div className="relative w-full h-64">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <Link href="/" className="absolute bg-white p-2 rounded-full shadow-md">
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </Link>
      </div>
      <Hr />
      <div className="p-5">
        <h1 className="text-2xl font-bold text-gray-900">{service.title}</h1>
        {service.description && (
          <p className="text-sm text-gray-500 mt-2">{service.description}</p>
        )}
      </div>
      <div className="px-5">
        <Link
          href="/address"
          className="flex items-center gap-1 w-full p-2 border border-gray-300 rounded-full text-gray-500 cursor-pointer"
        >
          <div className="rounded-full transition">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="">เลือกที่อยู่ของคุณ</span>
        </Link>
      </div>

      <div className="pb-4">
        {service.formSections.map((section) => (
          <div
            key={section.id}
            className="p-5 border-b border-gray-100 last:border-0"
          >
            <h3 className="font-bold text-lg mb-4 text-gray-800">
              {section.title}
            </h3>
            <Hr />

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
          <div className="p-5 mt-2">
            <h3 className="font-bold text-gray-800 mb-1">
              {service.documentLabel}
            </h3>
            <p className="text-xs text-gray-500 mb-3">{service.documentDesc}</p>
            <label className="border-dashed border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              <span>อัปโหลดเอกสาร</span>
              <input className="hidden" type="file" accept="image/*" />
            </label>

            <div className="mt-4">
              <h1 className="font-bold">ความต้องการพิเศษ</h1>
              <p className="mt-1 mb-4 text-xs">
                ระบุข้อมูลเพิ่มเติม เช่น โรคประจำตัว ความต้องการพิเศษ
                การนั่งวีลแชร์ ฯลฯ
              </p>
              <textarea
                placeholder="ระบุความต้องการพิเศษ"
                className="w-full p-2 border border-gray-300 rounded-lg outline-none"
              />
            </div>
          </div>
        )}
        <div className="p-4">
          <Link
            href={`/biv_service_id/${serviceId}/summary`}
            className="block w-full text-center bg-pink text-white font-bold text-lg py-3 rounded-xl"
          >
            ดำเนินการต่อ
          </Link>
        </div>
      </div>
    </div>
  );
}