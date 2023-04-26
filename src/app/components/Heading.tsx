"use client";

interface HeadingProps {
  title: string;
  subtitle: string;
  center?: boolean;
}
const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="mt-3 font-light text-slate-500">{subtitle}</div>
    </div>
  );
};

export default Heading;
