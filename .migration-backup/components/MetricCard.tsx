"use client";

type Props = {
  title: string;
  value: number;
};

export default function MetricCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

      <p className="text-sm text-gray-400 uppercase">
        {title}
      </p>

      <h3 className="text-5xl font-bold mt-4">
        {value}%
      </h3>

    </div>
  );
}