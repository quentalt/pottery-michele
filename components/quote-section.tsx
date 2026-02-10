export function QuoteSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="rounded-sm bg-accent px-8 py-14 text-center md:px-16 md:py-20">
        {/* Quote marks */}
        <div className="flex justify-center">
          <svg
            viewBox="0 0 40 30"
            fill="none"
            className="h-8 w-10"
            aria-hidden="true"
          >
            <path
              d="M10 15C10 10 14 5 18 5V0C10 0 0 8 0 18C0 24 4 30 10 30C14 30 18 26 18 22C18 18 14 15 10 15Z"
              fill="hsl(20, 70%, 42%)"
            />
            <path
              d="M32 15C32 10 36 5 40 5V0C32 0 22 8 22 18C22 24 26 30 32 30C36 30 40 26 40 22C40 18 36 15 32 15Z"
              fill="hsl(20, 70%, 42%)"
            />
          </svg>
        </div>

        <blockquote className="mx-auto mt-6 max-w-2xl">
          <p className="font-serif text-xl font-medium italic leading-relaxed text-foreground md:text-2xl">
            {
              "\"Pottery is a meditation on time and texture. We don't just make objects; we preserve the tactile memory of the earth itself.\""
            }
          </p>
          <footer className="mt-6">
            <cite className="text-xs font-semibold not-italic uppercase tracking-[0.2em] text-muted-foreground">
              {"— Master Potter Elias Thorne"}
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
