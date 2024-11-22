const HeroSection = () => {
  return (
    <div id="start" className="flex flex-col items-center mt-6 lg:mt-20 w-screen">
      <div className="relative w-screen">
        <img src="src/assets/knnimage.png" alt="KNN Algorithm Visualization" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-70 p-8 text-center">
          <h1 className="text-white text-5xl font-bold">BehaViewer</h1>
          <p className="text-gray-300 mt-2">Optimizing Business Through User Behavior</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 