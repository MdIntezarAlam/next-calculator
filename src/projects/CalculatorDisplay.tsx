interface CProps {
  entervalues: string;
  outPutValues: string;
}
export default function CalculatorDisplay({
  entervalues,
  outPutValues,
}: CProps) {
  return (
    <div className="h-[15%] w-full p-2 bg-zinc-700 rounded-t-md text-right overflow-hidden text-lg font-medium text-white">
      <h1>{entervalues || "0"}</h1>
      <h1 className="font-semibold">{outPutValues || "0"}</h1>
    </div>
  );
}
