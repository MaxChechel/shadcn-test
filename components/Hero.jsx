import { Button } from "./ui/button";
import Section from "./Section";

const Hero = () => {
  return (
    <Section>
      <h1 className="text-5xl mb-4">Sample main heading</h1>
      <p className="text-lg max-w-lg mb-6">
        This is a sample subheading. You can use this section to introduce your
        website or product.
      </p>
      <Button>Get started</Button>
    </Section>
  );
};

export default Hero;
