import Header from '@/components/layout/Header'
import Button from '@/components/common/Button'

const About = () => {
  return (
    <>
      <Header />
      <main className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">About Page</h1>
        
        <div className="flex flex-col gap-2">
          <Button size="small" shape="rounded-sm">Small Button</Button>
          <Button size="medium" shape="rounded-md">Medium Button</Button>
          <Button size="large" shape="rounded-full">Large Button</Button>
        </div>
      </main>
    </>
  );
};

export default About;
