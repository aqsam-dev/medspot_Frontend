import { useState , useEffect } from "react";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";
import socket from "../../services/socketService";

export default function MainLayout({ children,headerProps,}) 
{
 const [collapsed, setCollapsed] = useState(false);
 const [banner, setBanner] = useState(null);
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

    socket.on("connect", () => {

        console.log("SOCKET CONNECTED");
        console.log("Socket ID:", socket.id);

        const token = localStorage.getItem("token");

        console.log("TOKEN:", token);

        if (token) {

            const payload = JSON.parse(
                atob(token.split(".")[1])
            );

            console.log("JWT PAYLOAD:", payload);

            socket.emit(
                "registerPharmacy",
                payload.pharmacy_id
            );

            console.log(
                "REGISTER SENT:",
                payload.pharmacy_id
            );
        }
    });

    return () => {
        socket.off("connect");
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
    {banner && (
        <div className="
            mb-6
            p-4
            rounded-xl
            bg-green-50
            border
            border-green-200
        ">
            <h2 className="font-bold text-green-700">
                New Reservation
            </h2>
            <p className="text-green-600">
                {banner.message}
            </p>
            <p className="text-sm text-slate-500">
                Reservation ID:
                {banner.reservationId}
            </p>
        </div>
    )}
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