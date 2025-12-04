/* eslint-disable @typescript-eslint/no-explicit-any */
import { Check, ChevronRight } from 'lucide-react'
import { Button } from '~/components/ui/button'

const PRICING = [
  {
    name: 'Free',
    price: '0',
    desc: 'Dùng thử cơ bản',
    features: [
      'Phân tích text không giới hạn',
      '5 công thức/ngày',
      'Bộ lọc cơ bản',
    ],
    cta: 'Bắt đầu miễn phí',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '99K',
    period: '/tháng',
    desc: 'Phổ biến nhất',
    features: [
      'Upload ảnh không giới hạn',
      'Công thức không giới hạn',
      'Bộ lọc nâng cao',
      'Chế độ nấu ăn',
      'Lưu yêu thích',
    ],
    cta: 'Nâng cấp Pro',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '199K',

    period: '/tháng',
    desc: 'Cho đầu bếp chuyên nghiệp',
    features: [
      'Tất cả tính năng Pro',
      'Lập kế hoạch bữa ăn',
      'Theo dõi dinh dưỡng',
      'Danh sách mua sắm',
      'Hỗ trợ ưu tiên',
    ],
    cta: 'Liên hệ',
    highlighted: false,
  },
]
function PricingSection() {
  return (
    <section className="bg-muted/50 px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display mb-4 text-3xl font-bold sm:text-4xl">
          Gói Dịch Vụ
        </h2>
        <p className="text-muted-foreground mb-16 text-lg">
          Chọn gói phù hợp với nhu cầu của bạn
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {PRICING.map((plan: any) => {
            const highlight = plan.highlighted
            return (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 transition-all ${
                  highlight
                    ? 'bg-secondary text-secondary-foreground shadow-soft-lg scale-105'
                    : 'bg-card border-border/50 hover-lift border'
                }`}
              >
                {highlight && (
                  <div className="text-accent mb-4 text-xs font-semibold tracking-wider uppercase">
                    Phổ biến nhất
                  </div>
                )}

                <h3 className="font-display mb-2 text-2xl font-bold">
                  {plan.name}
                </h3>
                <p
                  className={`mb-4 text-sm ${
                    highlight
                      ? 'text-secondary-foreground/70'
                      : 'text-muted-foreground'
                  }`}
                >
                  {plan.desc}
                </p>

                <div className="mb-6">
                  <span className="font-display text-4xl font-extrabold">
                    {plan.price}đ
                  </span>
                  {plan.period && (
                    <span
                      className={
                        highlight
                          ? 'text-secondary-foreground/70'
                          : 'text-muted-foreground'
                      }
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((f: any) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check
                        className={`h-5 w-5 ${
                          highlight ? 'text-accent' : 'text-primary'
                        }`}
                      />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`btn-scale w-full rounded-full py-6 font-semibold ${
                    highlight
                      ? 'gradient-primary text-primary-foreground shadow-primary'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {plan.cta}
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
