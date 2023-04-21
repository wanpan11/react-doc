import { createRoot } from "react-dom/client";
import { useState } from "react";

const root = createRoot(document.getElementById("root_1"));

root.render(
  <div>
    <Wanpan />
    <CaoYeMeng />
  </div>
);

function Wanpan() {
  const [data, setData] = useState(0);

  debugger;
  console.log("root Wanpan ===> ", root);

  return (
    <div>
      Wanpan render: {data}
      <br />
      <button
        type="btn"
        onClick={() => {
          setData(draft => draft + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

function CaoYeMeng() {
  return <div>CaoYeMeng</div>;
}
