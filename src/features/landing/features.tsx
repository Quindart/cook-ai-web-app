import { Camera, MessageCircle, Sparkles } from 'lucide-react'

const FEATURES = [
  {
    icon: Camera,
    title: 'Nhận diện hình ảnh',
    desc: 'AI phát hiện nguyên liệu từ ảnh chụp',
    pro: true,
  },
  {
    icon: Sparkles,
    title: 'Phân tích văn bản',
    desc: 'Mô tả nguyên liệu bằng text miễn phí',
    pro: false,
  },
  {
    icon: MessageCircle,
    title: 'Chat hỗ trợ',
    desc: 'Hỏi đáp nấu ăn với AI 24/7',
    pro: false,
  },
]
function FeaturesSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display mb-4 text-3xl font-bold sm:text-4xl">
          Tính Năng Nổi Bật
        </h2>
        <p className="text-muted-foreground mb-16 text-lg">
          Mọi thứ bạn cần để nấu ăn thông minh hơn
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group bg-card border-border/50 hover:border-primary/30 hover-lift rounded-2xl border p-6 transition-all"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                  f.pro ? 'gradient-primary' : 'bg-accent/20'
                }`}
              >
                <f.icon
                  className={`h-6 w-6 ${
                    f.pro ? 'text-primary-foreground' : 'text-accent-foreground'
                  }`}
                />
              </div>

              <div className="mb-2 flex items-center gap-2">
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                {f.pro && (
                  <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs">
                    PRO
                  </span>
                )}
              </div>

              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
