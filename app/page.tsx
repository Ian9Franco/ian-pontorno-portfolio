import { HeroSection } from "@/components/hero-section"
import { WorkExperience } from "@/components/work-experience"
import { SelectedProjects } from "@/components/selected-projects"
import { ActivitiesAchievements } from "@/components/activities-achievements"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WorkExperience />
      <SelectedProjects />
      <ActivitiesAchievements />
      <Footer />
    </main>
  )
}
