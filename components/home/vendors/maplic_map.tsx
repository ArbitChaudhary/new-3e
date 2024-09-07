// src/pages/index.tsx
import { useEffect } from "react";

// Declare the custom 'mapplic-map' element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mapplic-map": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const MapplicMap = () => {
  useEffect(() => {
    // Dynamically load the Mapplic script
    const script = document.createElement("script");
    script.src = "https://mapplic.com/mapplic.js";
    script.id = "mapplic-script";
    script.async = true;
    document.body.appendChild(script);

      // Cleanup script on unmount
      return () => {
        document.getElementById("mapplic-script")?.remove();
      };
    }
  }, []);

  return (
    <mapplic-map data-json="https://mapplic.com/getMapData?id=nmUT5fBcrZJTHltRzd0U"></mapplic-map>
  );
};

export default MapplicMap;
