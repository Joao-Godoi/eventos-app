/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IInformationProps {
  label: string;
  children: any;
}

export default function Information(props: IInformationProps) {
  return (
    <div className="flex-1 flex flex-col items-start border border-zinc-800 px-6 py-3 rounded-lg">
      <span className="text-zinc-400 font-bold">{props.label}</span>
      <div className="text-xl">{props.children}</div>
    </div>
  );
}
