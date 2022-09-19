import { getDatabase, push, ref, set } from 'firebase/database';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import Layout from '../../components/Layout';
import { appFirebase } from '../../services/firebase';

export default function CreateMatch() {
  const router = useRouter();
  const db = getDatabase(appFirebase);

  const formik = useFormik({
    initialValues: {
      pemainMerah: '',
      kotaMerah: '',
      pemainBiru: '',
      kotaBiru: '',
      partai: '',
    },

    validationSchema: Yup.object({
      pemainMerah: Yup.string().required('tidak boleh kosong'),
      kotaMerah: Yup.string().required('tidak boleh kosong'),
      pemainBiru: Yup.string().required('tidak boleh kosong'),
      kotaBiru: Yup.string().required('tidak boleh kosong'),
      partai: Yup.string().required('tidak boleh kosong'),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        await set(ref(db, `Match/${values.partai}/Biodata`), {
          pemainmerah: values.pemainMerah,
          kotamerah: values.kotaMerah,
          pemainbiru: values.pemainBiru,
          kotabiru: values.kotaBiru,
        });

        await set(push(ref(db, `Partai`)), {
          label: values.partai,
          value: values.partai,
          pemainmerah: values.pemainMerah,
          kotamerah: values.kotaMerah,
          pemainbiru: values.pemainBiru,
          kotabiru: values.kotaBiru,
        });

        toast.success('data berhasil ditambahkan');
        resetForm();
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <>
      <Layout>
        <section className="flex justify-center">
          <div className="w-full py-10 border rounded-lg card bg-base-100 shadow-xl">
            <h2 className="font-semibold text-lg text-center">
              Buat Pertandingan
            </h2>
            <button
              className="btn btn-ghost btn-circle absolute right-1 top-1"
              onClick={() => router.push('/match')}
            >
              <FiArrowLeft size={24} />
            </button>
            <form onSubmit={formik.handleSubmit}>
              <div className="mt-5 flex flex-col gap-4 m-auto w-[620px]">
                <div className="form-control w-full">
                  <label className="label" htmlFor="partai">
                    <span className="label-text">Nama Partai</span>
                  </label>
                  <input
                    id="partai"
                    name="partai"
                    type="text"
                    placeholder="input partai"
                    className={`input input-bordered w-full ${
                      formik.touched.partai &&
                      formik.errors.partai &&
                      'border-red-400 bg-red-50'
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.partai}
                  />
                  {formik.touched.partai && formik.errors.partai && (
                    <div className="text-red-400 text-xs italic mt-2">
                      {formik.errors.partai}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-1 gap-4">
                    <div className="form-control w-full">
                      <label className="label" htmlFor="pemainMerah">
                        <span className="label-text">
                          Pemain <strong className="text-merah">Merah</strong>
                        </span>
                      </label>
                      <input
                        id="pemainMerah"
                        name="pemainMerah"
                        type="text"
                        placeholder="input pemain merah"
                        className={`input input-bordered w-full ${
                          formik.touched.pemainMerah &&
                          formik.errors.pemainMerah &&
                          'border-red-400 bg-red-50'
                        }`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.pemainMerah}
                      />
                      {formik.touched.pemainMerah &&
                        formik.errors.pemainMerah && (
                          <div className="text-red-400 text-xs italic mt-2">
                            {formik.errors.pemainMerah}
                          </div>
                        )}
                    </div>
                    <div className="form-control w-full">
                      <label className="label" htmlFor="kotaMerah">
                        <span className="label-text">
                          Kota Pemain{' '}
                          <strong className="text-merah">Merah</strong>
                        </span>
                      </label>
                      <input
                        id="kotaMerah"
                        name="kotaMerah"
                        type="text"
                        placeholder="input kota pemain merah"
                        className={`input input-bordered w-full ${
                          formik.touched.kotaMerah &&
                          formik.errors.kotaMerah &&
                          'border-red-400 bg-red-50'
                        }`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.kotaMerah}
                      />
                      {formik.touched.kotaMerah && formik.errors.kotaMerah && (
                        <div className="text-red-400 text-xs italic mt-2">
                          {formik.errors.kotaMerah}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-1 gap-4">
                    <div className="form-control w-full">
                      <label className="label" htmlFor="pemainBiru">
                        <span className="label-text">
                          Pemain <strong className="text-biru">Biru</strong>
                        </span>
                      </label>
                      <input
                        id="pemainBiru"
                        name="pemainBiru"
                        type="text"
                        placeholder="input pemain biru"
                        className={`input input-bordered w-full ${
                          formik.touched.pemainBiru &&
                          formik.errors.pemainBiru &&
                          'border-red-400 bg-red-50'
                        }`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.pemainBiru}
                      />
                      {formik.touched.pemainBiru &&
                        formik.errors.pemainBiru && (
                          <div className="text-red-400 text-xs italic mt-2">
                            {formik.errors.pemainBiru}
                          </div>
                        )}
                    </div>
                    <div className="form-control w-full ">
                      <label className="label" htmlFor="kotaBiru">
                        <span className="label-text">
                          Asal Pemain{' '}
                          <strong className="text-biru">Biru</strong>
                        </span>
                      </label>
                      <input
                        id="kotaBiru"
                        name="kotaBiru"
                        type="text"
                        placeholder="input asal pemain biru"
                        className={`input input-bordered w-full ${
                          formik.touched.kotaBiru &&
                          formik.errors.kotaBiru &&
                          'border-red-400 bg-red-50'
                        }`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.kotaBiru}
                      />
                      {formik.touched.kotaBiru && formik.errors.kotaBiru && (
                        <div className="text-red-400 text-xs italic mt-2">
                          {formik.errors.kotaBiru}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="btn btn-primary">
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
}
