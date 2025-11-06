import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PrivacyThreats } from "@/components/PrivacyThreats";
import { SafePractices } from "@/components/SafePractices";
import { Legislation } from "@/components/Legislation";
import { Quiz } from "@/components/Quiz";
import { ReportForm } from "@/components/ReportForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PrivacyThreats />
      <SafePractices />
      <Legislation />
      <Quiz />
      <ReportForm />
      <Footer />
    </div>
  );
};

export default Index;
