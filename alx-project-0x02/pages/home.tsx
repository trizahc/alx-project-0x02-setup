// pages/home.tsx
import Card from '../components/common/Card'; // ✅ Relative path is safer

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome to the Home Page</h1>
      
      <Card 
        title="Getting Started" 
        content="This card explains how to begin using the app." 
      />
      
      <Card 
        title="Next Steps" 
        content="This card describes the next steps in the project." 
      />
    </div>
  );
};

export default Home;
