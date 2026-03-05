"use client";

type Step = {
  title: string;
  description: string;
};

const BIV_STEPS: Step[] = [
  {
    title: "สมัครสมาชิก",
    description:
      "สมัครใช้งานครั้งแรกเพื่อยืนยันตัวตน เพิ่มความปลอดภัยในการใช้บริการ",
  },
  {
    title: "เลือกบริการที่ต้องการ",
    description:
      "เลือกบริการที่เหมาะกับคุณ เช่น Biv Ride หรือ Biv Daily",
  },
  {
    title: "กรอกรายละเอียด",
    description:
      "กรอกจุดรับ–ส่ง และข้อมูลที่จำเป็น เพื่อให้บริการเป็นไปอย่างถูกต้อง",
  },
  {
    title: "ชำระเงิน",
    description:
      "รองรับการชำระผ่านบัญชีธนาคาร หรือพร้อมเพย์ สะดวกและปลอดภัย",
  },
  {
    title: "ยืนยันและเริ่มใช้งาน",
    description:
      "เมื่อข้อมูลครบ ระบบจะจัดหาคนขับให้ทันที พร้อมให้บริการ",
  },
];

export default function BivHowItWorksAccordion() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-md mx-auto">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Biv ใช้ยังไง?
        </h2>

        <div className="space-y-3">
          {BIV_STEPS.map((step, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 p-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <span className="font-medium text-gray-900">
                  {step.title}
                </span>
              </div>

              {/* Content (เปิดตลอด) */}
              <div className="px-4 pb-4 text-sm text-gray-600">
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
