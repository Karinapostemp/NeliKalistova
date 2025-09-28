import { useEffect } from "react";

function App() {
  //FROM HERE

  const originalStyleSheet = document.styleSheets.item(2);

  useEffect(() => {
    const BASE_WIDTH = 1200;
    const styleSheet = originalStyleSheet;
    if (!styleSheet?.cssRules) return;
    const originalValues = [];
    for (let i = 0; i < styleSheet.cssRules.length; i++) {
      const rule = styleSheet.cssRules[i];
      if (rule.style) {
        for (let j = 0; j < rule.style.length; j++) {
          const propName = rule.style[j];
          if (rule.style[propName].endsWith("px")) {
            const value = parseFloat(rule.style[propName]);
            originalValues.push({ ruleIndex: i, propName, value });
          }
        }
      }
    }
    const handleResize = () => {
      const scale = window.innerWidth / BASE_WIDTH;
      for (const item of originalValues) {
        const { ruleIndex, propName, value } = item;
        styleSheet.cssRules[ruleIndex].style[propName] = `${value * scale}px`;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [originalStyleSheet]);

  //TO HERE

  return null;
}

export default App;
