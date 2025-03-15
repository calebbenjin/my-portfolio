import AquatrackCase from "@/components/case-studies/AquatrackCase";
import FiatplugCase from "@/components/case-studies/FiatplugCase";
import TrubookerCase from "@/components/case-studies/TrubookerCase";
import YeaCaseStudy from "@/components/case-studies/YeaCaseStudy";
import React from "react";

type Params = {
  slug: string;
};

const CasePage = async ({ params }: { params: Params }) => {
  return (
    <div>
      {params?.slug == "yogaexperience-africa-case-study" && <YeaCaseStudy />}
      {params?.slug == "fiatplug-case-study" && <FiatplugCase />}
      {params?.slug == "trubooker-case-study" && <TrubookerCase />}
      {params?.slug == "aquatrack-case-study" && <AquatrackCase />}
    </div>
  );
};

export default CasePage;
