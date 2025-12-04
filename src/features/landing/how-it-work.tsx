const HOW_IT_WORKS = [
  {
    step: '01',
    icon: '📸',
    title: 'Chụp hoặc Mô tả',
    description:
      'Chụp ảnh nguyên liệu hoặc nhập văn bản mô tả những gì bạn có trong bếp.',
  },
  {
    step: '02',
    icon: '🤖',
    title: 'AI Nhận Diện',
    description:
      'AI tự động phát hiện nguyên liệu và phân tích để tìm công thức phù hợp.',
  },
  {
    step: '03',
    icon: '👨‍🍳',
    title: 'Nấu Ngay',
    description:
      'Nhận gợi ý công thức chi tiết với hướng dẫn từng bước và bắt đầu nấu ăn.',
  },
]
export default function HowItWorkSection() {
  return (
    <section className="bg-muted/50 px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display mb-4 text-3xl font-bold sm:text-4xl">
          Cách Hoạt Động
        </h2>
        <p className="text-muted-foreground mb-16 text-lg">
          Chỉ 3 bước đơn giản để có công thức hoàn hảo
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {HOW_IT_WORKS.map((item, index) => (
            <div
              key={item.step}
              className="bg-card border-border/50 shadow-soft animate-stagger hover-lift rounded-2xl border p-8 opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="text-5xl">{item.icon}</span>
                <span className="text-primary/20 font-display text-4xl font-bold">
                  {item.step}
                </span>
              </div>
              <h3 className="font-display mb-3 text-xl font-bold">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
