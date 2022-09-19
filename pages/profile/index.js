import Layout from '../../components/Layout';

export default function profile() {
  return (
    <Layout>
      <div className="hero h-64 shadow-lg bg-white">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <h2 className="text-2xl font-bold">Asep Rudi L.H</h2>
            <span className="py-6">@rudi008</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
