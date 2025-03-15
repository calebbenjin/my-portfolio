import React from "react";

const techStack = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Redux Toolkit" },
  { name: "React Hooks" },
  { name: "Tailwind CSS" },
  { name: "GraphQL" },
  { name: "AWS S3" },
  { name: "Git & GitHub" },
  { name: "(CI/CD)" },
  { name: "Performance" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Styled Components" },
  { name: "Web Accessibility" },
  { name: "Agile" },
  { name: "SSR" },
  { name: "Integration Testing" },
];

const learnStack = [
  { name: "EVM-based blockchains" },
  { name: "Solana" },
  { name: "IPFS" },
  { name: "Ceramic" },
  { name: "Wagmi" },
  { name: "Ethers" },
  { name: "Web3js." },
  { name: "Solidity" },
  { name: "SVM" },
];

const IntroSection = () => {
  return (
    <section className="mt-6">
      <h1 className="text-xl font-medium mb-4">🧑‍💻Caleb Benjamin</h1>
      <p>
        I&apos;m a frontend developer and an optimist, passionate about
        optimization, business goals, and, most importantly, Startups and
        Founders. This led me to join{" "}
        <a href="https://www.eachblock.xyz/" className="text-zinc-400">
          Eachblock
        </a>
        , where I build MVP for non-technical founders and launch to market on
        time.
      </p>
      <div className="mt-8">
        <h2 className="font-bold text-xl">My Stack</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack?.map((stack, i) => (
            <span className="text-sm border rounded-lg px-2 py-1" key={i}>
              {stack.name}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 text-zinc-600">
        <h2 className="font-medium text-md text-zinc-400">
          Currently Learning Web3 technologies including
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {learnStack?.map((stack, i) => (
            <span
              className="text-sm border border-zinc-600 rounded-lg px-2 py-1"
              key={i}>
              {stack.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
