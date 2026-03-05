import Input from "./_components/input";
import Blaner from "./_components/blaner";
import Features from "./_components/featuressection";
import Hr from "@/app/components/hr";
import Service from "./_components/service";
import HowToUseBiv from "./_components/howtouse";
import Footer from "@/app/components/footer";
export default function HomeScreen() {
  return (
    <div className="pt-4">
      <Input />
      <Blaner />
      <Features />
      <Hr />
      <Service />
      <Hr />
      <HowToUseBiv />
      <Hr />
      <Footer />
    </div>
  );
}