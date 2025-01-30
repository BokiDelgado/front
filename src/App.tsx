import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from "react";

// 1. import `HeroUIProvider` component
import { HeroUIProvider } from "@heroui/react";

function App() {
  // 2. Wrap HeroUIProvider at the root of your app
  return (
      <>
        <h1>Hola mundo</h1>
      </>
  );
}

export default App;