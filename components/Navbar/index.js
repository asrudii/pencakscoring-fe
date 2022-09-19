import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { logOut } from '../../redux/actions/user';
import Link from 'next/link';

export default function Navbar({ onClickMenu }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const userGlobal = useSelector((state) => state.user);

  return (
    <>
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <Link href="/">
            <a className="btn btn-ghost normal-case text-xl">Pencak Scoring</a>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <button
            className="btn btn-square btn-ghost lg:hidden"
            onClick={onClickMenu}
          >
            <FiMenu size={24} />
          </button>
          {/* <button className="btn btn-ghost btn-circle">
            <FiSearch size={18} />
          </button> */}
          <div className="dropdown dropdown-end">
            <div className="flex items-center gap-2">
              <span>{userGlobal?.displayName}</span>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/profile">
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </Link>
              </li>
              <li>
                <a onClick={() => dispatch(logOut(router))}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
