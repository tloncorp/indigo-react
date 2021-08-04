import * as React from "react";
import classNames from "classnames";

export type ContinuousProgressBarProps = React.HTMLAttributes<
  HTMLDivElement
> & {
  percentage: number;
};

export const ContinuousProgressBar = ({
  className,
  percentage,
}: ContinuousProgressBarProps) => {
  const normalizedProgress = Math.round(Math.max(Math.min(percentage, 100), 0));

  return (
    <div
      className={classNames(
        "relative flex w-full h-1 bg-gray-200 rounded-lg overflow-hidden",
        className
      )}
    >
      <div
        className={classNames(
          "absolute top-0 left-0 h-full border-r border-solid bg-blue-400 transition-all duration-200",
          percentage < 1 ? "border-transparent" : "border-white"
        )}
        style={{ width: `${normalizedProgress}%` }}
      />
      <progress
        value={normalizedProgress}
        aria-valuemin={0}
        aria-valuenow={normalizedProgress}
        aria-valuemax={100}
        max="100"
        tabIndex={0}
        className="sr-only"
      >
        {normalizedProgress}%
      </progress>
    </div>
  );
};

ContinuousProgressBar.displayName = "ContinuousProgressBar";
