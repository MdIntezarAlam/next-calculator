interface CProps {
  calculatedValues: (value: string) => void;
}
export default function CalculatorButton({ calculatedValues }: CProps) {
  return (
    <div className="pt-5 h-[75%] w-full bg-[#5f5f5f] rounded-t-md border-t">
      <div className="grid grid-cols-4 place-items-center lg:content-between h-full w-full py-2">
        {["7", "8", "9", "/"].map((value) => (
          <button
            key={value}
            onClick={() => calculatedValues(value)}
            className="h-14 w-14 bg-black text-white lg:text-2xl font-bold rounded-full"
          >
            {value}
          </button>
        ))}
        {["4", "5", "6", "*"].map((value) => (
          <button
            key={value}
            onClick={() => calculatedValues(value)}
            className="h-14 w-14 bg-black text-white lg:text-2xl font-bold rounded-full"
          >
            {value}
          </button>
        ))}
        {["1", "2", "3", "-"].map((value) => (
          <button
            key={value}
            onClick={() => calculatedValues(value)}
            className="h-14 w-14 bg-black text-white lg:text-2xl font-bold rounded-full"
          >
            {value}
          </button>
        ))}
        {["0", ".", "AC", "+"].map((value) => (
          <button
            key={value}
            onClick={() => calculatedValues(value)}
            className="h-14 w-14 bg-black text-white lg:text-2xl font-bold rounded-full"
          >
            {value}
          </button>
        ))}
      </div>
      <button
        onClick={() => calculatedValues("=")}
        className="w-full h-10 bg-blue-500 rounded-b-full text-4xl"
      >
        =
      </button>
    </div>
  );
}
