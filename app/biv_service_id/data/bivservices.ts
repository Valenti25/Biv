import { ServiceData } from "@/app/biv_service_id/types/bivservice";
export const servicesData: Record<string, ServiceData> = {
  
  // =======================================================
  // 1. Biv Ride (บริการรถรับ-ส่ง)
  // =======================================================
  "biv-ride": {
    title: "บริการ Biv Ride",
    image: "/images/ride-cover.jpg",
    description: "บริการรถรับ-ส่งสำหรับผู้สูงอายุ รองรับวีลแชร์ ปลอดภัย อุ่นใจทุกการเดินทาง",
    
    formSections: [
      {
        id: "service_type",
        title: "เลือกประเภทบริการ",
        options: [
          { label: "ไปตามนัด (ไป-กลับ)", price: 500 },
          { label: "รับ-ส่ง ตรวจประจำปี", price: 600 },
          { label: "ไปฟื้นฟู/กายภาพ", price: 450 },
        ]
      },
      {
        id: "duration",
        title: "เลือกช่วงเวลาบริการ",
        options: [
          { label: "Quickie (20-40 นาที)", price: 200 },
          { label: "Mini (1-3 ชั่วโมง)", price: 500 },
          { label: "Halfy (4-8 ชั่วโมง)", price: 1200 },
        ]
      },
      {
        id: "caregiver_option",
        title: "เลือกผู้ดูแลพร้อมรถ (Car Plus+)",
        options: [
          { 
            label: "ต้องการผู้ดูแลพร้อมพาหนะส่วนตัว", 
            description: "สำหรับนั่งรถ-รับส่ง หรือบริการที่ไม่ใช่รถพยาบาล",
            price: 1198 
          },
          { 
            label: "ไม่ต้องการพาหนะส่วนตัว", 
            description: "สำหรับนั่งรถพยาบาล หรือเดินทางไปเอง",
            price: 0 
          },
        ]
      }
    ],

    hasDocumentUpload: true,
    documentLabel: "เอกสารประกอบ",
    documentDesc: "เช่น ใบนัดแพทย์ หรือแผนที่สถานที่ปลายทาง"
  },

  // =======================================================
  // 2. Biv Buddy (เพื่อนดูแล / พาเที่ยว)
  // =======================================================
  "biv-buddy": {
    title: "บริการ Biv Buddy",
    image: "/images/buddy-cover.jpg",
    description: "เพื่อนลูกหลานพาเที่ยว คลายเหงา เดินห้าง ไหว้พระ เน้นความสุขทางใจ",

    formSections: [
      {
        id: "activity_type",
        title: "เลือกกิจกรรม",
        options: [
          { label: "อยู่เป็นเพื่อนพูดคุยที่บ้าน", price: 500 },
          { label: "พาไปทำบุญ/ไหว้พระ", price: 800 },
          { label: "พาไปเดินห้าง/ซื้อของ", price: 600 },
        ]
      },
      {
        id: "duration",
        title: "เลือกระยะเวลา",
        options: [
          { label: "ครึ่งวัน (4 ชม.)", price: 0 },
          { label: "เต็มวัน (8 ชม.)", price: 500 },
        ]
      }
    ],

    hasDocumentUpload: false
  },

  // =======================================================
  // 3. Biv Daily (ดูแลกิจวัตรประจำวัน)
  // =======================================================
  "biv-daily": {
    title: "บริการ Biv Daily",
    image: "/images/daily-cover.jpg",
    description: "ผู้ช่วยดูแลกิจวัตรประจำวัน อาบน้ำ ป้อนข้าว พยุงเดิน สำหรับผู้ที่ช่วยเหลือตัวเองได้น้อย",

    formSections: [
      {
        id: "care_level",
        title: "ระดับการช่วยเหลือตัวเอง",
        options: [
          { 
            label: "ช่วยเหลือตัวเองได้บ้าง", 
            description: "เดินเองได้ ต้องการคนช่วยพยุง หรือเตรียมอาหาร",
            price: 800 
          },
          { 
            label: "ช่วยเหลือตัวเองได้น้อย", 
            description: "ใช้วอล์คเกอร์ ต้องการคนช่วยอาบน้ำ/ขับถ่าย",
            price: 1000 
          },
          { 
            label: "ผู้ป่วยติดเตียง", 
            description: "พลิกตัว ป้อนอาหารทางสายยาง ดูดเสมหะเบื้องต้น",
            price: 1500 
          }
        ]
      },
      {
        id: "shift_time",
        title: "เลือกช่วงเวลาทำงาน",
        options: [
          { label: "กะเช้า (08:00 - 17:00)", price: 0 },
          { label: "กะดึก (20:00 - 06:00)", price: 200 }
        ]
      }
    ],

    hasDocumentUpload: true,
    documentLabel: "ประวัติทางการแพทย์",
    documentDesc: "สมุดประจำตัวผู้ป่วย หรือรายการยาที่ต้องทาน (ถ้ามี)"
  },

  // =======================================================
  // 4. Biv Beside (เฝ้าไข้ข้างเตียง)
  // =======================================================
  "biv-beside": {
    title: "บริการ Biv Beside",
    image: "/images/beside-cover.jpg",
    description: "บริการเฝ้าไข้ที่โรงพยาบาลหรือที่บ้าน ดูแลตลอด 24 ชม. โดยทีมงานมืออาชีพ",

    formSections: [
      {
        id: "location",
        title: "สถานที่เฝ้าไข้",
        options: [
          { label: "โรงพยาบาล (ในเขต กทม.)", price: 1200 },
          { label: "ที่บ้าน", price: 1400 }
        ]
      },
      {
        id: "duration",
        title: "ระยะเวลา",
        options: [
          { label: "เฝ้าไข้ 12 ชั่วโมง", price: 0 },
          { label: "เฝ้าไข้ 24 ชั่วโมง (ไป-กลับ)", price: 1000 }
        ]
      },
      {
        id: "special_care",
        title: "อุปกรณ์พิเศษที่ต้องดูแล",
        options: [
          { label: "ไม่มี (เฝ้าระวังทั่วไป)", price: 0 },
          { label: "มีสายยางให้อาหาร/สายสวนปัสสาวะ", price: 200 },
          { label: "มีเครื่องช่วยหายใจ/เจาะคอ", price: 400 }
        ]
      }
    ],

    hasDocumentUpload: true,
    documentLabel: "เอกสารรับรอง",
    documentDesc: "ใบรับรองแพทย์ หรือรายละเอียดอาการล่าสุด"
  }
};