import { ArrowRight } from 'lucide-react'
import { Button } from '~/components/ui/button'

function FinalCTASection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="gradient-primary text-primary-foreground relative overflow-hidden rounded-3xl p-12 text-center">
          <div className="absolute inset-0 bg-[url('/food-pattern-subtle.jpg')] opacity-10" />
          <div className="relative z-10">
            <h2 className="font-display mb-4 text-3xl font-bold sm:text-4xl">
              Sẵn Sàng Nấu Ăn Thông Minh?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg opacity-90">
              Bắt đầu miễn phí ngay hôm nay. Nâng cấp bất cứ lúc nào để mở khóa
              tất cả tính năng.
            </p>

            <Button className="btn-scale text-primary rounded-full bg-white px-8 py-6 text-lg font-semibold hover:bg-white/90">
              Dùng thử miễn phí <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
