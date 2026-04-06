const withBase = (relPath: string) => {
  const base = (import.meta as unknown as { env: { BASE_URL?: string } }).env?.BASE_URL || "/";
  return `${base.replace(/\/+$/, "/")}${relPath.replace(/^\/+/, "")}`;
};

function Section({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-5">{children}</div>;
}

function ArticleImage({ src, alt, width = "100%" }: { src: string; alt: string; width?: string }) {
  return (
    <img
      src={withBase(src)}
      alt={alt}
      className="h-auto rounded-lg"
      style={{ width }}
    />
  );
}

export function OverviewPage() {
  return (
    <div className="overflow-auto">
      <div className="max-w-6xl mx-auto px-8 py-12 flex flex-col gap-20">

        <Section>
          <ArticleImage src="resources/design space.png" alt="Design Space Overview" width="100%" />
        </Section>

      </div>
    </div>
  );
}
