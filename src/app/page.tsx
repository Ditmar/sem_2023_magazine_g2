import ScientificArticles from '@/components/ScientificArticles';
import CarouselComponent from '@/components/CarouselComponent/CarouselComponent';
import Container from '@/components/Container';
export default function Home() {
  return (
    <Container>
      <ScientificArticles />
      <CarouselComponent />
    </Container>
  );
}
