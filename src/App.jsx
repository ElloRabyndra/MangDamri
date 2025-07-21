import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardHeader, CardTitle } from "./components/ui/card";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-72 p-4">
        <CardTitle>Welcome</CardTitle>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </Card>
    </div>
  );
};

export default App;
