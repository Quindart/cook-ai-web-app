function Footer() {
  return (
    <footer className="border-border border-t px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="gradient-primary flex h-8 w-8 items-center justify-center rounded-lg">
                🍳
              </div>
              <span className="font-display text-lg font-bold">AI Cook</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Nấu ăn thông minh với AI
            </p>
          </div>

          {[
            { title: 'Sản phẩm', items: ['Tính năng', 'Bảng giá', 'Blog'] },
            {
              title: 'Công ty',
              items: ['Về chúng tôi', 'Liên hệ', 'Tuyển dụng'],
            },
            { title: 'Pháp lý', items: ['Điều khoản', 'Bảo mật'] },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-semibold">{section.title}</h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                {section.items.map((i) => (
                  <li
                    key={i}
                    className="hover:text-foreground cursor-pointer transition-colors"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-border text-muted-foreground border-t pt-8 text-center text-sm">
          © 2025 AI Cooking Assistant. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
