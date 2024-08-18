import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, CardDescription, CardTitle } from "./components/Card";
function App() {
  return (
    <div className="App">
      <Card bgColor="bg-blue-500" textColor="text-black">
        <CardTitle>
          <h1>test2</h1>
        </CardTitle>
        <CardDescription>
          <p>test</p>
        </CardDescription>
      </Card>
    </div>
  );
}

export default App;
