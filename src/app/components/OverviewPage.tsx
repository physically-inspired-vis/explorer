// BASE_URL-safe helper (works on GitHub Pages subpaths)
const withBase = (relPath: string) => {
  const base = (import.meta as unknown as { env: { BASE_URL?: string } }).env?.BASE_URL || "/";
  return `${base.replace(/\/+$/, "/")}${relPath.replace(/^\/+/, "")}`;
};

export function OverviewPage() {
  return (
    <div className="p-8 overflow-auto flex flex-col items-center gap-8">
      <img
        src={withBase("resources/framing.png")}
        alt="Framing"
        className="h-auto"
        style={{ width: "42%" }}
      />

      <img
        src={withBase("resources/design space.png")}
        alt="Design Space"
        className="h-auto"
        style={{ width: "75%" }}
      />
    </div>
  );
}
