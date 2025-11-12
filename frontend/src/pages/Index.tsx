import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import templeIcon from "@/assets/temple-icon.png";
import backgroundImage from "@/assets/himalayan-background.jpg";

const Index = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      <div className="relative text-center max-w-2xl">
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-card shadow-2xl flex items-center justify-center border-4 border-primary/20">
            <img src={templeIcon} alt="Temple" className="w-20 h-20" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground drop-shadow-lg">
          Welcome
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-12 drop-shadow">
          Experience peace and tranquility
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14 shadow-xl"
          >
            <Link to="/login">Sign In</Link>
          </Button>
          <Button 
            asChild 
            size="lg"
            variant="outline"
            className="border-2 border-foreground/20 bg-card/80 hover:bg-card text-lg px-8 h-14 shadow-xl backdrop-blur-sm"
          >
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
