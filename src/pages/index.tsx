import { Inter } from "next/font/google";
import clsx from "clsx";
import { useCallback, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const works = [1, 2, 3, 4, 5];

const work = async (index: number) => {
  console.log(`WORK: Running work ${index}...`);
  await waitFor(index);
  console.log(`WORK: Done work ${index}`);
  return index ** 2;
};
const waitFor = async (index: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(index);
    }, index * 1000);
  });
};

export default function Home() {
  const [values, setValues] = useState<(number | null)[]>([]);

  const fetchAll = useCallback(async () => {}, []);

  return (
    <main
      className={clsx(
        "min-h-dvh p-4 md:p-20 flex flex-col items-center",
        inter.className
      )}
    >
      <button onClick={fetchAll}>Fetch all</button>
      <ul className="list-decimal">
        {values.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </main>
  );
}
