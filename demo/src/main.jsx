import { createRoot } from "react-dom/client";
import { useState } from "react";

const root = createRoot(document.getElementById("root_1"));

root.render(
  <div>
    <Wanpan />
  </div>
);

function Wanpan() {
  const [data, setData] = useState(0);

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
