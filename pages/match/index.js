import Layout from '../../components/Layout';
import {
  FiFilter,
  FiPlus,
  FiEdit,
  FiTrash2,
  FiSearch,
  FiX,
} from 'react-icons/fi';
import { useRouter } from 'next/router';
import {
  getDatabase,
  ref,
  query,
  equalTo,
  limitToFirst,
  limitToLast,
  orderByChild,
  onValue,
  remove,
} from 'firebase/database';
import { appFirebase } from '../../services/firebase';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Match() {
  const router = useRouter();
  const db = getDatabase(appFirebase);
  const [matchData, setMatchData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [limit, setLimit] = useState(10);

  const getMatch = useCallback((keyword, limit) => {
    let queryConstrains = [limitToFirst(limit)];
    if (keyword) queryConstrains.push(orderByChild('value'), equalTo(keyword));

    let resultData = [];
    onValue(query(ref(db, 'Partai'), ...queryConstrains), (response) => {
      if (response.exists()) {
        let data = response.val();
        Object.keys(data).map((key) => {
          resultData.push({
            id: key,
            ...data[key],
          });
        });
      } else {
        toast.error('data tidak ditemukan');
      }
    });

    setMatchData(resultData);
  }, []);

  useEffect(() => {
    getMatch(keyword, limit);
  }, []);

  const onDelete = (id, partai) => {
    confirmAlert({
      title: 'Konfirmasi hapus data',
      message: 'Kamu yakin mau hapus data ini?',
      buttons: [
        {
          label: 'Ya',
          onClick: async () => {
            try {
              await remove(ref(db, `Partai/${id}`));
              await remove(ref(db, `Match/${partai}`));

              getMatch();
              toast.success('data berhasil dihapus');
            } catch (error) {
              toast.error(error.message);
            }
          },
        },
        {
          label: 'Batal',
        },
      ],
    });
  };

  return (
    <>
      <Layout>
        <section>
          <div className="card w-full bg-base-100 shadow-lg p-10">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">Pertandingan</h2>
              <div className="flex gap-5 items-center">
                <div className="form-control">
                  <div className="input-group relative">
                    <input
                      type="text"
                      placeholder="cari partai ..."
                      className="input input-bordered pr-8"
                      onChange={(e) => setKeyword(e.target.value)}
                      value={keyword}
                    />
                    {keyword && (
                      <button
                        className="absolute right-14 top-4"
                        onClick={() => {
                          getMatch(null, 5);
                          setKeyword('');
                        }}
                      >
                        <FiX size={18} />
                      </button>
                    )}
                    <button
                      className="btn btn-square"
                      onClick={() => getMatch(keyword, limit)}
                    >
                      <FiSearch size={18} />
                    </button>
                  </div>
                </div>
                {/* <div className="dropdown">
                  <label tabIndex={1} className="btn btn-ghost btn-circle">
                    <FiFilter size={18} />
                  </label>
                  <ul
                    tabIndex={1}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div> */}
                <button
                  className="btn btn-primary gap-2"
                  onClick={() => router.push('/match/create')}
                >
                  <FiPlus size={18} />
                  Tambah
                </button>
              </div>
            </div>
            <div className="overflow-x-auto w-full mt-5 mb-5">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Partai</th>
                    <th>Sisi Merah</th>
                    <th>Sisi Biru</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {matchData.length ? (
                    matchData?.map((item, idx) => {
                      return (
                        <tr key={item.id}>
                          <td>
                            <span>{idx + 1}</span>
                          </td>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div>
                                <div className="font-bold">{item.value}</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span>{item.pemainmerah}</span>
                            <div className="text-sm opacity-50">
                              {item.kotamerah}
                            </div>
                          </td>
                          <td>
                            <span>{item.pemainbiru}</span>
                            <div className="text-sm opacity-50">
                              {item.kotabiru}
                            </div>
                          </td>
                          <th>
                            <button
                              className="btn btn-ghost btn-circle"
                              onClick={() =>
                                router.push(`/match/edit/${item.id}`)
                              }
                            >
                              <FiEdit size={18} color="#39bf1b" />
                            </button>
                            <button
                              className="btn btn-ghost btn-circle"
                              onClick={() => onDelete(item.id, item.value)}
                            >
                              <FiTrash2 size={18} color="#e02822" />
                            </button>
                          </th>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={5}>
                        <div className="flex flex-col justify-center items-center gap-3 h-30">
                          <span>Data Tidak Ditemukan</span>
                          <button
                            className="btn btn-sm"
                            onClick={() => {
                              getMatch(null, 5);
                              setKeyword('');
                            }}
                          >
                            reset
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {matchData.length > limit && (
              <div className="flex justify-end">
                <button onClick={() => setLimit(limit + 10)}>
                  Load More ...
                </button>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
}
