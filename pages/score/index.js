import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { appFirebase } from '../../services/firebase';

export default function Home() {
  const [dataScore, setDataScore] = useState();

  useEffect(() => {
    const db = getDatabase(appFirebase);
    const starCountRef = ref(db, `Match/Partai 1A`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setDataScore(data);
    });
  }, []);

  return (
    <>
      {console.log(dataScore['Babak 1']['Wasit Juri 1'].Merah)}
      <div className="px-20">
        <Head>
          <title>Pencak Scoring</title>
          <meta name="description" content="Pencak silat digital scoring" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="min-h-screen py-8 flex flex-1 flex-col items-center">
          {/* title */}
          <div>
            <h1 className="m-0 text-4xl font-semibold text-center">
              GELANGGANG A
            </h1>
            <span className="my-16 text-3xl text-center">PARTAI KE 1</span>
            <span className="text-3xl mx-3">-</span>
            <span className="my-16 text-3xl text-center">A PUTRA PELAJAR</span>
          </div>

          {/* score */}
          <div className="flex w-full gap-36 3xl:gap-44 mt-20 3xl:mt-24">
            <div className="flex flex-1 flex-col">
              <div className="bg-merah flex justify-center items-center  3xl:h-20 p-3 text-white text-xl 3xl:text-5xl rounded-md">
                <span>SKOR MERAH</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-merah text-[160px] 3xl:text-[300px] 4xl:text-[450px] font-bold ">
                  22
                </span>
                <span className="text-3xl 3xl:text-5xl font-medium">
                  {dataScore?.Biodata.pemainmerah}
                </span>
                <span className="text-xl 3xl:text-3xl text-gray-600">
                  {dataScore?.Biodata.kotamerah}
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="bg-biru flex justify-center items-center 3xl:h-20 p-3 text-white text-xl 3xl:text-5xl rounded-md">
                <span>SKOR BIRU</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-biru text-[160px] 3xl:text-[300px] 4xl:text-[450px] font-bold">
                  22
                </span>
                <span className="text-3xl 3xl:text-5xl font-medium">
                  {dataScore?.Biodata.pemainbiru}
                </span>
                <span className="text-xl 3xl:text-3xl text-gray-600">
                  {dataScore?.Biodata.kotabiru}
                </span>
              </div>
            </div>
          </div>

          {/* detail score */}
          <div className="flex w-full mt-5 3xl:mt-16 3xl:text-2xl 4xl:text-3xl">
            {/* red score */}
            <div className="flex flex-1 flex-col">
              <table className="table-auto">
                <thead>
                  <tr>
                    <th>Wasit Juri 1</th>
                    <th>Wasit Juri 2</th>
                    <th>Wasit Juri 3</th>
                    <th>Wasit Juri 4</th>
                    <th>Wasit Juri 5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center h-7 3xl:h-9 even:bg-red-100 odd:bg-white">
                    <td>1</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr className="text-center h-7 3xl:h-9 even:bg-red-100 odd:bg-white">
                    <td>2</td>
                    <td>2</td>
                    <td>1</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                  <tr className="text-center h-7 3xl:h-9 even:bg-red-100 odd:bg-white">
                    <td>1</td>
                    <td>3</td>
                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="text-center font-bold h-8 3xl:h-9 bg-red-300">
                    <td>1</td>
                    <td>3</td>
                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            {/* round */}
            <div className="flex flex-col items-center w-36 3xl:w-44 font-bold">
              <div className="mb-1">
                <span>BABAK</span>
              </div>
              <div className="h-7 3xl:h-9 flex items-center">
                <span>I</span>
              </div>
              <div className="h-7 3xl:h-9 flex items-center">
                <span>II</span>
              </div>
              <div className="h-7 3xl:h-9 flex items-center">
                <span>III</span>
              </div>
              <div className="h-7 3xl:h-9 flex items-center">
                <span>TOTAL</span>
              </div>
            </div>
            {/* blue score */}
            <div className="flex flex-1 flex-col">
              <table className="table-auto  ">
                <thead>
                  <tr>
                    <th>Wasit Juri 1</th>
                    <th>Wasit Juri 2</th>
                    <th>Wasit Juri 3</th>
                    <th>Wasit Juri 4</th>
                    <th>Wasit Juri 5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center h-7 3xl:h-9 even:bg-red-100 odd:bg-white">
                    <td>1</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr className="text-center h-7 3xl:h-9 even:bg-blue-100 odd:bg-white">
                    <td>2</td>
                    <td>2</td>
                    <td>1</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                  <tr className="text-center h-7 3xl:h-9 even:bg-blue-100 odd:bg-white">
                    <td>1</td>
                    <td>3</td>
                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="text-center font-bold h-8 3xl:h-9 bg-blue-300">
                    <td>1</td>
                    <td>3</td>
                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
