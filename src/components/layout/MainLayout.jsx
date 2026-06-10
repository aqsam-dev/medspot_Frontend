import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";

export default function MainLayout({
  children,
  headerProps,
}) {
  const [collapsed, setCollapsed] =
    useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <main
        className={`
          flex-1 px-10 py-8 transition-all duration-300
          ${collapsed ? "ml-20" : "ml-64"}
        `}
      >
        <Header {...headerProps} />

        {children}
      </main>
    </div>
  );
}



//use example
// import MainLayout from "../../layouts/MainLayout";

// export default function Dashboard() {
//   return (
//     <MainLayout
//       headerProps={{
//         title: "Dashboard",
//         subtitle: "Overview of pharmacy activity",
//       }}
//     >
//       Dashboard Content
//     </MainLayout>
//   );
// }