import React from 'react';

const SkillsComponent = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16">
        <div >
          <ul className="list-disc ml-4">
            <li className="flex items-center mb-6 mt-4">
              <span className="mr-2 text-[#025A4E] font-bold">C#</span>
              <img
                alt="C# logo icon"
                className="icons h-10 w-10"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg"
              />
            </li>
            <li className="flex items-center mb-4">
              <span className="mr-2 text-[#025A4E] font-bold ">HTML</span>{" "}
              <img
                alt="HTML logo icon"
                className="icons h-10 w-10"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
              />
            </li>
            <li className="flex items-center mb-4">
              <span className="mr-2 text-[#025A4E] font-bold">CSS</span>{" "}
              <img
                alt="CSS logo icon"
                className="icons h-10 w-10"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
              />
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-disc ml-4">
            <li className="flex items-center mb-6 mt-4">
              <span className="mr-2 text-[#025A4E] font-bold">JavaScript</span>{" "}
              <img
                alt="JavaScript logo icon"
                className="icons h-10 w-10"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              />
            </li>
            <li className="flex items-center mb-4">
              <span className="mr-2 text-[#025A4E] font-bold">TypeScript</span>{" "}
              <img
                alt="TypeScript logo icon"
                className="icons h-10 w-10"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
              />
            </li>
            <li className="flex items-center mb-4">
              <span className="mr-2 text-[#025A4E] font-bold">React</span>{" "}
              <img
                alt="React logo icon"
                className="icons h-10 w-10"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              />
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-disc ml-4">
            <li className="flex items-center mb-6 mt-4">
              <span className="mr-2 text-[#025A4E] font-bold">Next.js</span>{" "}
              <img
                alt="Next.js logo icon"
                className="icons h-10 w-10"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              />
            </li>
            <li className="flex items-center mb-4">
              <span className="mr-2 text-[#025A4E] font-bold">Angular</span>{" "}
              <img
                alt="Angular logo icon"
                className="icons h-10 w-10"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg"
              />
            </li>
            <li className="flex items-center mb-4">
              <span className="mr-2 text-[#025A4E] font-bold">Dotnet</span>{" "}
              <img
                alt="Visual Studio Code logo icon"
                className="icons h-10 w-10"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"
              />
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-disc ml-4">
            <li className="flex items-center mb-6 mt-4">
              <span className="mr-2 text-[#025A4E] font-bold">Azure</span>{" "}
              <img
                alt="Azure logo icon"
                className="icons h-10 w-10"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
              />
            </li>
            <li className="flex items-center mb-4">
              <span className="mr-2 text-[#025A4E] font-bold">Figma</span>{" "}
              <img
                alt="Figma logo icon"
                className="icons h-10 w-10"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              />
            </li>
            <li className="flex items-center mb-2">
              <span className="mr-2 text-[#025A4E] font-bold">Jira</span>{" "}
              <img
                alt="Jira logo icon"
                className="icons h-10 w-10"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
