import CaseStudies from "@/features/home/components/case-studies";
import Services from "@/features/home/components/services";
import WorkingProcess from "@/features/home/components/working-process";
import CallToAction from "@/features/home/components/call-to-action";
import ContactUs from "@/features/home/components/contact-us";
import Team from "@/features/home/components/team";

export default function Home() {
  return (
    <div className="flex flex-col gap-35">
      <div className="">
        <Services />
      </div>
      <div className="">
        <CallToAction />
      </div>
      <div className="">
        <CaseStudies />
      </div>
      <div className="">
        <WorkingProcess />
      </div>
      <div className="">
        <Team />
      </div>
      <div className="">
        <ContactUs />
      </div>
    </div>
  );
}
