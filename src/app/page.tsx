import copilotImage from "@public/copilot.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
          <Image
            src={copilotImage}
            alt="GitHub Copilot Logo"
            width={50}
            height={50}
            className="mr-4"
          />
          <h1 className="text-3xl font-bold text-black">Welcome to GitHub Copilot Intermediate/Advanced</h1>
        <p className="mb-4 text-black mt-5">
          This project is a hands-on guide to mastering GitHub Copilot's capabilities. 
          Explore the examples in the sidebar to learn how Copilot can enhance your development workflow.
        </p>
        <p className="mb-4 text-black">
          Each example demonstrates a specific use case, such as integrating Copilot into your daily workflow, writing code faster, improving developer experience, reducing boilerplate, and onboarding onto new codebases.
        </p>
        <p className="text-black">
          Follow the links on the left to dive into each scenario and see how Copilot can transform your coding experience.
        </p>
    </div>
  );
}
