import { HeroSection } from "@/components/hero-section"
import { SelectedProjects } from "@/components/selected-projects"
import { WorkExperience } from "@/components/work-experience"
import { ActivitiesAchievements } from "@/components/activities-achievements"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SelectedProjects />
      <WorkExperience />
      <ActivitiesAchievements />
      <Footer />
    </main>
  )
}
