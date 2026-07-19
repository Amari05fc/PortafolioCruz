interface SectionHeadingProps {
  label: string
}

export function SectionHeading({ label }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="whitespace-nowrap font-mono text-2xl font-medium tracking-tight text-primary sm:text-3xl">
        <span className="text-muted-foreground">{"</"}</span>
        {label}
        <span className="text-muted-foreground">{">"}</span>
      </h2>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-gradient-to-r from-primary/50 via-border to-transparent"
      />
    </div>
  )
}
