import Suika from "@suika/core";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const suika = new Suika();
    console.log(suika);
  }, []);

  return <div>1</div>;
}
