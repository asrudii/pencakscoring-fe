import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { persistUser } from '../../redux/actions/user';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

export default function Layout({ children }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(persistUser(router));
  }, []);

  return (
    <>
      <div className="drawer drawer-mobile bg-gray-100">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          checked={show}
        />
        <div className="drawer-content flex flex-col">
          <Navbar onClickMenu={() => setShow(!show)} />
          <div className="flex flex-col flex-1 ">
            <main className="p-10">{children}</main>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}
