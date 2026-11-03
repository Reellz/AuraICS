import React from "react";
import { Navbar, Footer} from "../components/ui/ui-layout";
import BackToTop from "../components/ui/BackToTop";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row md:overflow-hidden bg-brand-cream min-h-screen ">
        <div className="grow">{children}</div>
      </div>
      <div>
        <BackToTop/>
        <Footer />
      </div>
    </main>
  );
}
