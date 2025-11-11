import { CircularProgress } from "@/components/ui/progress"
import { FC } from "react"

export const Home: FC = () => {
  return (
  <CircularProgress
          value={64}
          size={120}
          strokeWidth={10}
          showLabel
          labelClassName="text-xl font-bold"
          renderLabel={(progress) => `${progress}%`}
          className="stroke-indigo-500/25"
          progressClassName="stroke-indigo-600"
        />
  )
}
