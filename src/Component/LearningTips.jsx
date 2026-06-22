export function LearningTips() {
  const tips = [
    {
      title: "Set Daily Goals",
      description:
        "Break large topics into smaller daily learning goals.",
    },
    {
      title: "Use Active Recall",
      description:
        "Test yourself frequently instead of only rereading notes.",
    },
    {
      title: "Time Blocking",
      description:
        "Allocate dedicated study sessions without distractions.",
    },
    {
      title: "Pomodoro Technique",
      description:
        "Study for 25 minutes and take a 5-minute break.",
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Learning Tips
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg"
            >
              <div className="card-body">
                <h3 className="card-title">{tip.title}</h3>
                <p>{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}