import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import Link from "next/link";
import { FC, SVGProps } from "react";

export default function Footer() {
  return (
    <footer className=" py-8 md:py-12 w-full">
      <div className="container max-w-7xl flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-4">   
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://www.linkedin.com/in/m-navyanth-bb475b288/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  <LinkedinIcon className="h-7 w-7" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>https://www.linkedin.com/in/m-navyanth-bb475b288/</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </footer>
  );
}



const LinkedinIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
