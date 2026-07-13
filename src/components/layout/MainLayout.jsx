import { useState , useEffect } from "react";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";
import socket from "../../services/socketService";

export default function MainLayout({
  children,
  headerProps,
}) {
  const [collapsed, setCollapsed] =
    useState(false);
    useEffect(() => {

    const pharmacy = JSON.parse(
        localStorage.getItem("pharmacy")
    );

    if (pharmacy?.pharmacy_id) {

        socket.emit(
            "registerPharmacy",
            pharmacy.pharmacy_id
        );

    }

}, []);

useEffect(() => {

    socket.on(
        "reservationNotification",
        (data) => {

            console.log(data);

        }
    );

    return () => {

        socket.off("reservationNotification");

    };

}, []);
useEffect(() => {

    socket.on("playSound", () => {

        const audio = new Audio("/notification.mp3");

        audio.play();

    });

    return () => {

        socket.off("playSound");

    };

}, []);




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