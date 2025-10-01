import { Title } from "@/components/title";
import TopBar from "@/components/top-bar";

export default function Home() {
  return (
    <>
      <Title text="Все пиццы" size="lg" className="font-extrabold" />
      <TopBar />
    </>
  );
}
