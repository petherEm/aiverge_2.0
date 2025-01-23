import { clsx } from "clsx";

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#f8f8f8] from-[28%] via-[#f2ebf3] via-[70%] to-[#080609] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"
      )}
    />
  );
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          "absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0",
          "bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff]",
          "rotate-[-10deg] rounded-full blur-3xl"
        )}
      />
    </div>
  );
}
