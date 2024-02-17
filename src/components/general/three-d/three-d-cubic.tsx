import { useEffect, useState } from "react";
import { Application } from "@splinetool/runtime";
import { HStack } from "@chakra-ui/react";

const ThreeDViewer: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
    const app = new Application(canvas);

    app
      .load("https://prod.spline.design/QS7Ijolu5I6vV70T/scene.splinecode")
      // .load("https://prod.spline.design/aJ9A0wISgGOXyhUx/scene.splinecode")
      .then(() => {
        setLoading(false); // Set loading to false when the application is loaded
      })
      .catch((error) => {
        console.error("Failed to load 3D application:", error);
        setLoading(false); // Set loading to false even in case of failure
      });

    // Cleanup function
    return () => {
      // Do any cleanup here, e.g., stop animations, remove event listeners, etc.
    };
  }, []); // Empty dependency array means this effect will only run once after the component mounts

  return (
    <HStack height={`full`} width={`full`}>
      {loading && <p>Loading...</p>}
      <canvas id="canvas3d" style={{ display: loading ? "none" : "block" }} />
    </HStack>
  );
};

export default ThreeDViewer;
