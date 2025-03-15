/* eslint-disable @typescript-eslint/no-explicit-any */
import AquatrackCase from "@/components/case-studies/AquatrackCase";
import FiatplugCase from "@/components/case-studies/FiatplugCase";
import TrubookerCase from "@/components/case-studies/TrubookerCase";
import YeaCaseStudy from "@/components/case-studies/YeaCaseStudy";
import React from "react";

async function CasePage({ params }: { params: any }) {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      {slug == "yogaexperience-africa-case-study" && <YeaCaseStudy />}
      {slug == "fiatplug-case-study" && <FiatplugCase />}
      {slug == "trubooker-case-study" && <TrubookerCase />}
      {slug == "aquatrack-case-study" && <AquatrackCase />}
    </div>
  );
}

export default CasePage;
