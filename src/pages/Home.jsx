import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardTitle } from "../components/ui/card";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <div className="flex justify-center items-center h-screen">
        <Card className="w-80 p-4">
          <CardTitle>Welcome to My React Template</CardTitle>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Home;
