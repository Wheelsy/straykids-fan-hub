import React, { useState } from "react";
import Giscus from "@giscus/react";
import ForumTabButton from "./ForumTabButton";

interface ForumProps {
  term: string;
  inputPosition: "top" | "bottom";
  theme: string;
  reactionsEnabled: "1" | "0";
  lang: string;
}

export default function Forum({
  term,
  inputPosition,
  theme,
  reactionsEnabled,
  lang,
}: ForumProps) {
  const categories = {
    General: "DIC_kwDOPkN33s4CuuQc",
    Art: "DIC_kwDOPkN33s4CuuSJ",
    Music: "DIC_kwDOPkN33s4CuuSK",
  };

  type Category = keyof typeof categories;
  const [category, setCategory] = useState<Category>("Art");

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        {Object.keys(categories).map((cat) => (
          <ForumTabButton
            key={cat}
            label={cat}
            active={category === cat}
            onClick={() => setCategory(cat as keyof typeof categories)}
          />
        ))}
      </div>

      <Giscus
        id="comments"
        repo="Wheelsy/straykids-fan-hub"
        repoId="R_kgDOPkN33g"
        category={category}
        categoryId={categories[category]}
        mapping="title"
        term={term}
        reactionsEnabled={reactionsEnabled}
        emitMetadata="0"
        inputPosition={inputPosition}
        theme={theme}
        lang={lang}
        loading="lazy"
      />
    </div>
  );
}
