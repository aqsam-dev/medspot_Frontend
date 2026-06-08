import Sidebar from "../../components/layout/Sidebar";
import ActivityFeed from "../../components/layout/ActivityFeed";
import Header from "../../components/layout/Header";

export default function MainLayout({ children, headerProps }) {
  return (
    <div className="flex bg-white min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="flex-1 ml-64 px-10 py-8">

        <Header {...headerProps} />

        {children}

      </main>

      {/* Overlay Feed */}
      <ActivityFeed />

    </div>
  );
}