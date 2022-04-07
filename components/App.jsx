import React, { useState } from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <Card 
        imgURL="data:image/jpeg;base64,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"
        name="Joseph Lee"
        tweet="'this is my first tweet 🤓'"
      />
    </div>
  );
}

export default App;
