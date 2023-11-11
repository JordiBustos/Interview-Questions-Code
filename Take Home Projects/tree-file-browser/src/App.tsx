const tree = [
  {
    name: "root",
    children: [
      {
        name: "node_modules",
        children: [
          {
            name: "subfolder1",
          },
          {
            name: "subfolder2",
          },
          {
            name: "subfolder3",
            children: [
              {
                name: "sub3subfolder1",
              },
            ],
          },
        ],
      },
      {
        name: "index.html",
      },
      {
        name: "package.json",
      },
      {
        name: "src",
        children: [
          {
            name: "assets",
          },
        ],
      },
    ],
  },
];

import Entry from "./components/Entry";
import { Item } from "Types";
import "./App.css";

function App() {
  return (
    <section>
      {tree.map((item: Item) => (
        <Entry item={item} depth={0} />
      ))}
    </section>
  );
}

export default App;
