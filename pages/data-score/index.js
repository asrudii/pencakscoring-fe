import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';

export default function DataScore() {
  return (
    <>
      <Layout>
        <Head>
          <title>Pencak Scoring - data score</title>
          <meta name="description" content="data score pencak scoring" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="min-h-screen flex flex-1 flex-col items-center  card bg-white shadow-lg py-10 px-5">
          {/* title */}
          <div>
            <h1 className="m-0 text-4xl font-semibold text-center">
              DATA SKOR
            </h1>
          </div>

          {/* header */}
          <div className="flex w-full gap-36 3xl:gap-44 mt-10">
            <div className="flex flex-1 flex-col">
              <div className="bg-merah flex justify-center items-center 3xl:h-20 p-3 text-white text-xl 3xl:text-5xl rounded-md">
                <span>SUDUT MERAH</span>
              </div>
              <div className="flex flex-col items-center mt-5">
                <span className="text-3xl 3xl:text-5xl font-medium">
                  Sendy Nico
                </span>
                <span className="text-xl 3xl:text-3xl text-gray-600">
                  Bandung Barat
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col">
              <div className="bg-biru flex justify-center items-center 3xl:h-20 p-3 text-white text-xl 3xl:text-5xl rounded-md">
                <span>SUDUT BIRU</span>
              </div>
              <div className="flex flex-col items-center mt-5">
                <span className="text-3xl 3xl:text-5xl font-medium">
                  Sendy Nico
                </span>
                <span className="text-xl 3xl:text-3xl text-gray-600">
                  Bandung Barat
                </span>
              </div>
            </div>
          </div>

          {/* data score */}
          <div className="flex flex-col gap-10 w-full mt-14">
            {/* title score */}
            <div className="flex items-center gap-3 text-lg font-bold">
              <div className="min-w-[152px] flex justify-center">
                <span className="text-xl">BABAK</span>
              </div>
              <div className="flex items-center justify-between w-full gap-9">
                <div className="flex flex-col items-center gap-3">
                  <span>Juri 1</span>
                  <div className="flex justify-between gap-2">
                    <div className="flex items-center justify-center bg-red-100 w-20 h-8">
                      <span className="text-merah">M</span>
                    </div>
                    <div className="flex items-center justify-center bg-blue-100 w-20 h-8">
                      <span className="text-biru">B</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <span>Juri 2</span>
                  <div className="flex justify-between gap-2">
                    <div className="flex items-center justify-center bg-red-100 w-20 h-8">
                      <span className="text-merah">M</span>
                    </div>
                    <div className="flex items-center justify-center bg-blue-100 w-20 h-8">
                      <span className="text-biru">B</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <span>Juri 3</span>
                  <div className="flex justify-between gap-2">
                    <div className="flex items-center justify-center bg-red-100 w-20 h-8">
                      <span className="text-merah">M</span>
                    </div>
                    <div className="flex items-center justify-center bg-blue-100 w-20 h-8">
                      <span className="text-biru">B</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <span>Juri 4</span>
                  <div className="flex justify-between gap-2">
                    <div className="flex items-center justify-center bg-red-100 w-20 h-8">
                      <span className="text-merah">M</span>
                    </div>
                    <div className="flex items-center justify-center bg-blue-100 w-20 h-8">
                      <span className="text-biru">B</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <span>Juri 5</span>
                  <div className="flex justify-between gap-2">
                    <div className="flex items-center justify-center bg-red-100 w-20 h-8">
                      <span className="text-merah">M</span>
                    </div>
                    <div className="flex items-center justify-center bg-blue-100 w-20 h-8">
                      <span className="text-biru">B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* table score */}
            <div className="flex items-center gap-3 text-md font-bold">
              <div className="min-w-[152px] flex justify-center">
                <Image
                  src="/icons/satu.svg"
                  width={15}
                  height={56}
                  alt="satu"
                />
              </div>
              {/* table */}
              <div className="border-green-600 border-l-8 w-full">
                <div className="flex items-center justify-between w-full gap-9 odd:bg-gray-100 even:bg-white h-10">
                  <div className="flex justify-between gap-2">
                    <div className="flex items-center justify-center w-20 h-8">
                      <span>1</span>
                    </div>
                    <div className="flex items-center justify-center w-20 h-8">
                      <span>2</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2">
                    <div className="flex items-center justify-center w-20 h-8">
                      <span>1</span>
                    </div>
                    <div className="flex items-center justify-center w-20 h-8">
                      <span>2</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2">
                    <div className="flex items-center justify-center w-20 h-8">
                      <span>1</span>
                    </div>
                    <div className="flex items-center justify-center w-20 h-8">
                      <span>2</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2">
                    <div className="flex items-center justify-center w-20 h-8">
                      <span>1</span>
                    </div>
                    <div className="flex items-center justify-center w-20 h-8">
                      <span>2</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2">
                    <div className="flex items-center justify-center w-20 h-8">
                      <span>1</span>
                    </div>
                    <div className="flex items-center justify-center w-20 h-8">
                      <span>2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
