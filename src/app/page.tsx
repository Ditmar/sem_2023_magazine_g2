import ScientificArticles from "@/components/ScientificArticles";
import CarouselComponent from "@/components/CarouselComponent/CarouselComponent";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ScientificArticles/>
      <CarouselComponent/>
    </main>
  )
}
