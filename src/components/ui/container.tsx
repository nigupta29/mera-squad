import { cn } from "@/lib/utils"

export default function Container({
  children,
  className = ""
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) {
  return (
    <div className={cn("mx-auto max-w-[1366px]", className)}>{children}</div>
  )
}
