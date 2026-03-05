"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  CreditCard,
  Wallet,
  QrCode,
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "@/app/(user)/biv_service_id/data/bivservices";
import Hr from "@/app/components/hr";

export default function SummaryPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = use(props.params);
  const serviceId = params.id;
  const service = servicesData[serviceId];
  const [paymentMethod, setPaymentMethod] = useState("cash");

  // Mock Data: จำลองข้อมูลที่ส่งมาจากหน้าก่อนหน้า (Duration ที่เลือกแล้ว)
  const selectedDuration = { label: "Quickie (20-40 นาที)", price: 200 };

  // รวมรายการสรุปค่าใช้จ่ายทั้งหมด
  const mockSelectedOptions = [
    {
      label: "ค่าบริการพื้นฐาน",
      price: service?.formSections[0]?.options[0]?.price || 1000,
    },
    { label: selectedDuration.label, price: selectedDuration.price }, // รายการช่วงเวลาที่เลือกมา
    { label: "เพิ่มเวลา 30 นาที", price: 300 }, // Option เสริมอื่นๆ
  ];

  const totalPrice = mockSelectedOptions.reduce(
    (acc, item) => acc + item.price,
    0
  );

  if (!service) return <div>Loading...</div>;

  return (
    <div className="relative font-sans text-gray-800 pb-10">
      <div className="px-5 py-3 flex items-center gap-3">
        <Link
          href={`/biv_service_id/${serviceId}`}
          className="bg-gray-100 p-2 rounded-full"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </Link>
      </div>

      <div className="p-3">
        <div className="flex gap-4 items-start">
          <div>
            <h2 className="font-bold text-gray-900 text-lg">
              บริการที่เลือก: {service.title}
            </h2>
            <p className="text-xs text-gray-500 mb-2">{service.description}</p>
          </div>
        </div>
      </div>
      
      <Hr />
      
      <div className="px-5 mt-4">
        <h3 className="font-bold text-gray-800 mb-2 text-lg">
          ความต้องการพิเศษ
        </h3>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 relative">
          <p className="text-sm text-gray-600 pl-8 leading-relaxed">
            มีผู้สูงอายุใช้วีลแชร์ และต้องการคนช่วยพยุงเดินเข้าบ้าน
          </p>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg mb-4 text-gray-800">
          เลือกช่องทางชำระเงิน
        </h3>

        <div className="space-y-3">
          <label
            onClick={() => setPaymentMethod("qrcode")}
            className={`flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-all ${
              paymentMethod === "qrcode"
                ? "border-green-600 bg-green-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <QrCode className="text-purple-600" />
              <span className="font-medium text-gray-700">สแกน QR Code</span>
            </div>
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                paymentMethod === "qrcode"
                  ? "bg-green-600 border-green-600"
                  : "border-gray-300"
              }`}
            >
              {paymentMethod === "qrcode" && (
                <CheckCircle2 size={14} className="text-white" />
              )}
            </div>
          </label>

          <label
            onClick={() => setPaymentMethod("credit")}
            className={`flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-all ${
              paymentMethod === "credit"
                ? "border-green-600 bg-green-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <CreditCard className="text-blue-600" />
              <span className="font-medium text-gray-700">
                บัตรเครดิต / เดบิต
              </span>
            </div>
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                paymentMethod === "credit"
                  ? "bg-green-600 border-green-600"
                  : "border-gray-300"
              }`}
            >
              {paymentMethod === "credit" && (
                <CheckCircle2 size={14} className="text-white" />
              )}
            </div>
          </label>

          <label
            onClick={() => setPaymentMethod("cash")}
            className={`flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-all ${
              paymentMethod === "cash"
                ? "border-green-600 bg-green-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <Wallet />
              <span className="font-medium text-gray-700">
                จ่ายด้วยเงินสด
              </span>
            </div>
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                paymentMethod === "cash"
                  ? "bg-green-600 border-green-600"
                  : "border-gray-300"
              }`}
            >
              {paymentMethod === "cash" && (
                <CheckCircle2 size={14} className="text-white" />
              )}
            </div>
          </label>
        </div>
      </div>

      <div className="h-2 bg-gray-50 border-t border-b border-gray-100"></div>

      <div className="p-5 pb-0">
        <h3 className="font-bold text-gray-800 mb-3">สรุปค่าใช้จ่าย</h3>
        <div className="space-y-2 text-sm text-gray-600">
          {mockSelectedOptions.map((option, idx) => (
            <div key={idx} className="flex justify-between">
              <span>{option.label}</span>
              <span>{option.price.toLocaleString()} ฿</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-gray-900">ยอดชำระรวม</span>
          <span className="text-xl font-bold text-green-600">
            {totalPrice.toLocaleString()} ฿
          </span>
        </div>
        <Link
          href="/biv_service_id/biv-ride/matching"
          className="block w-full text-center bg-green text-white font-bold text-lg py-3 rounded-xl"
        >
          ยืนยัน
        </Link>
      </div>
    </div>
  );
}