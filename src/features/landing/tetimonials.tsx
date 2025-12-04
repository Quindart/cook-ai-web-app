import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Minh Anh',
    role: 'Nội trợ',
    text: 'Ứng dụng giúp tôi tận dụng hết nguyên liệu trong tủ lạnh. AI nhận diện rất chính xác!',
    avatar: '👩',
  },
  {
    name: 'Hoàng Long',
    role: 'Sinh viên',
    text: 'Tính năng chế độ nấu ăn từng bước rất tiện lợi cho người mới học nấu như mình.',
    avatar: '👨',
  },
  {
    name: 'Thu Hà',
    role: 'Nhân viên văn phòng',
    text: 'Tiết kiệm rất nhiều thời gian suy nghĩ hôm nay ăn gì. Công thức đa dạng và ngon!',
    avatar: '👩‍💼',
  },
]

function TetimonialsSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display mb-16 text-3xl font-bold sm:text-4xl">
          Người Dùng Nói Gì
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-card border-border/50 shadow-soft rounded-2xl border p-6"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent h-5 w-5" />
                ))}
              </div>

              <p className="mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3">
                <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TetimonialsSection
