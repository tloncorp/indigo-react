import * as React from "react";
import classNames from "classnames";

export type SegmentedProgressBarProps = React.HTMLAttributes<HTMLDivElement> & {
  segments?: number;
  current?: number;
};

function sequence(num: number) {
  return Array.from(Array(num), (_, i) => i);
}

export const SegmentedProgressBar = ({
  segments = 1,
  current = 0,
  className,
  ...props
}: SegmentedProgressBarProps) => {
  return (
    <div
      className={classNames(
        "flex w-full h-1 divide-x divide-white bg-gray-200 rounded-lg overflow-hidden",
        className
      )}
      {...props}
    >
      {sequence(segments).map((_, index: number) => (
        <div
          key={"segment" + index}
          className={classNames(
            "flex-1 h-full",
            index < current && "bg-blue-400"
          )}
        />
      ))}
      <progress
        value={current}
        aria-valuemin={0}
        aria-valuenow={current}
        aria-valuemax={segments}
        max={segments}
        tabIndex={0}
        className="sr-only"
      >
        {current}/{segments}
      </progress>
    </div>
  );
};

SegmentedProgressBar.displayName = "SegmentedProgressBar";
