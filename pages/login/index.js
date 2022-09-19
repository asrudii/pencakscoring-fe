import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { loginUser } from '../../redux/actions/user';

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    let userToken = Cookies.get('user-token');
    if (userToken) router.push('/');
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('harus diisi'),
      password: Yup.string().required('harus diisi'),
    }),

    onSubmit: (values) => {
      dispatch(loginUser(values.email, values.password, router));
    },
  });

  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <form onSubmit={formik.handleSubmit} className="card-body">
            <h2 className="card-title text-2xl">LOGIN</h2>
            <p className="text-slate-400 italic">
              Masuk disini untuk mengelola pertandingan
            </p>
            <div className="flex flex-col gap-y-3 my-5">
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="mail"
                  placeholder="example@mail.com"
                  className={`input input-bordered w-full max-w-xs mt-2 ${
                    formik.touched.email &&
                    formik.errors.email &&
                    'border-red-400 bg-red-50'
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-400 text-xs italic mt-2">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPass ? 'text' : 'password'}
                    placeholder="type password"
                    className={`input input-bordered w-full max-w-xs mt-2 pr-10 ${
                      formik.touched.email &&
                      formik.errors.email &&
                      'border-red-400 bg-red-50'
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {showPass ? (
                    <FiEyeOff
                      size={24}
                      className="absolute right-3 top-5 hover:cursor-pointer"
                      onClick={() => setShowPass(false)}
                    />
                  ) : (
                    <FiEye
                      size={24}
                      className="absolute right-3 top-5 hover:cursor-pointer"
                      onClick={() => setShowPass(true)}
                    />
                  )}
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-400 text-xs italic mt-2">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text mr-2">Remember me</span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <Link href="/admin/reset">
                    <span className="text-primary">Forgot password?</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-block btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
