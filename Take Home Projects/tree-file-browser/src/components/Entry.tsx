import { Item } from "Types";

export default function Entry({ item, depth }: { item: Item; depth: number }) {
  return (
    <div style={{ paddingLeft: `${depth * 12}px` }}>
      {item?.children ? (
        <details>
          <summary>{item.name}</summary>
          {item?.children?.length && mapChildren(item, depth)}
        </details>
      ) : (
        <p>{item.name}</p>
      )}
    </div>
  );
}

function mapChildren(item: Item, depth: number) {
  return (
    <div>
      {item?.children?.map((itemChildren) => (
        <Entry item={itemChildren} depth={depth + 1} />
      ))}
    </div>
  );
}
