export default function Home() {
  const siteName: string = "CSMJU Website";
  const isOpen: boolean = true;
  const topics: string[] = [
    "HTML",
    "CSS",
    "TypeScript",
    "Next.js",
  ];

  return (
    <main className="page">
      <h1>{siteName}</h1>
      <p>สถานะระบบ: {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}</p>
      
      <div className="badge-group">
        {topics.map((topic) => (
          <span key={topic} className="badge">
            {topic}
          </span>
        ))}
      </div>
    </main>
  );
}