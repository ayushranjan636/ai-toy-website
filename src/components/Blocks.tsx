import { RichText } from "@/components/RichText";
import type { Block } from "@/content/blog/types";

/** Renders one content block (shared by blog posts and buying-guide / comparison pages). */
export function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List>
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </List>
      );
    }
    case "callout":
      return (
        <aside className="post-callout">
          <p className="post-callout-title">{block.title}</p>
          <p>
            <RichText text={block.text} />
          </p>
        </aside>
      );
    case "table":
      return (
        <div className="post-table-wrap" role="region" aria-label={block.caption ?? "Table"} tabIndex={0}>
          <table className="post-table">
            {block.caption ? <caption>{block.caption}</caption> : null}
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row">
                        <RichText text={cell} />
                      </th>
                    ) : (
                      <td key={i}>
                        <RichText text={cell} />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
