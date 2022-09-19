import Link from 'next/link';
import { FiHome, FiDatabase, FiPlayCircle } from 'react-icons/fi';

export default function Sidebar() {
  return (
    <>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-full lg:w-52 bg-gray-800 text-white shadow-xl">
          <li className="border-l-4 border-green-500">
            <Link href="/">
              <a className="hover:bg-gray-600">
                <FiHome size={18} />
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/data-score">
              <a className="hover:bg-gray-600">
                <FiDatabase size={18} />
                Data Score
              </a>
            </Link>
          </li>
          <li>
            <Link href="/match">
              <a className="hover:bg-gray-600">
                <FiPlayCircle size={18} />
                Match
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
