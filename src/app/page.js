'use client'

import StoreProvider from "./StoreProvider";
import Graph from "@/lib/features/graph/Graph";

export default function Home() {
  return (
    <div style={{
      height: "100vh", width: '100vw',
      minHeight: "100%"
    }}>
      <StoreProvider>
        < Graph />
      </ StoreProvider>

    </div>
  );
}
