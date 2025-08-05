import { Button } from "@workspace/ui/components/button";

import { add } from "@workspace/math/add";
import { Input } from "@workspace/ui/components/input";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World/Widget</h1>
        <Button size="sm">Button</Button>
        <Input type="text" placeholder="Add number" />
        <p>{add(2, 6)}</p>
      </div>
    </div>
  );
}
