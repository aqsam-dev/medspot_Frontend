import { useState, useEffect } from "react";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";
import socket from "../../services/socketService";

export default function MainLayout({
    children,
    headerProps,
}) {

    const [collapsed, setCollapsed] = useState(false);
    const [banner, setBanner] = useState(null);

    // Connect socket
    useEffect(() => {

        if (!socket.connected) {
            socket.connect();
        }

        console.log(
            "SOCKET INITIAL STATE:",
            socket.connected
        );

    }, []);

    // Unlock audio once
    useEffect(() => {
        const unlockAudio = () => {
 const audio = new Audio( "notifications.mp3" );
            audio.play()
                .then(() => {
                    audio.pause();
                    audio.currentTime = 0;
                    console.log(
                        "AUDIO UNLOCKED!"
                    );
                })
                .catch(() => {});
            window.removeEventListener(
                "click",
                unlockAudio
            );
        };

        window.addEventListener(
            "click",
            unlockAudio
        );
        return () => {
            window.removeEventListener(
                "click",
                unlockAudio
            );
        };
    }, []);
    // Mai socket logic
    useEffect(() => {
        socket.on("connect", () => {
            console.log(
                "================================"
            );
            console.log(
                "SOCKET CONNECTED"
            );
            console.log(
                "Socket ID:",
                socket.id
            );
            const token =
                localStorage.getItem(
                    "token"
                );
            if (!token) {
                console.log(
                    "NO TOKEN FOUND"
                );
                return;
            }
            const payload =
                JSON.parse(
                    atob(
                        token.split(".")[1]
                    )
                );
            console.log(
                "REGISTERING PHARMACY:",
                payload.pharmacy_id
            );
            socket.emit(
                "registerPharmacy",
                payload.pharmacy_id
            );
        });
        socket.onAny(
            (event, ...args) => {
                console.log(
                    "EVENT:",
                    event
                );
                console.log(
                    "ARGS:",
                    args
                );
            }
        );
        socket.on(
            "reservationNotification",
            (data) => {
                console.log(
                    "RESERVATION RECEIVED!"
                );
                console.log(data);
                setBanner({
                    message:
                        data.message,
                    reservationId:
                        data.reservation_id
                });
                // Tell Reservations page
                window.dispatchEvent(
                    new Event(
                        "refreshReservations"
                    )
                );
            }
        );
        socket.on(
            "playSound",
            () => {
                console.log(
                    "PLAY SOUND RECEIVED!"
                );
                const audio =
                    new Audio(
                        "/notifications.mp3"
                    );

                audio.play()
                    .then(() => {

                        console.log(
                            "SOUND PLAYED!"
                        );

                    })
                    .catch(
                        (err) => {

                            console.log(
                                "AUDIO ERROR:",
                                err
                            );

                        }
                    );

            }
        );

        return () => {

            socket.off(
                "connect"
            );

            socket.offAny();

            socket.off(
                "reservationNotification"
            );

            socket.off(
                "playSound"
            );

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
                    flex-1
                    px-10
                    py-8
                    transition-all
                    duration-300
                    ${collapsed
                        ? "ml-20"
                        : "ml-64"}
                `}
            >

                <Header
                    {...headerProps}
                />

                {/* Persistent Banner */}

                {banner && (

                    <div
                        className="
                            fixed
                            top-5
                            right-5
                            z-50
                            w-96
                            p-5
                            rounded-xl
                            bg-green-100
                            border-2
                            border-green-500
                            shadow-2xl
                        "
                    >

                        <h2
                            className="
                                text-xl
                                font-bold
                                text-green-800
                            "
                        >
                            New Reservation
                        </h2>

                        <p
                            className="
                                mt-2
                                text-green-700
                            "
                        >
                            {banner.message}
                        </p>

                        <p
                            className="
                                mt-2
                                text-sm
                                text-gray-700
                            "
                        >
                            Reservation ID:
                            {" "}
                            {banner.reservationId}
                        </p>

                        <button
                            onClick={() =>
                                setBanner(
                                    null
                                )
                            }
                            className="
                                mt-4
                                px-4
                                py-2
                                rounded-lg
                                bg-red-500
                                text-white
                            "
                        >
                            Dismiss
                        </button>

                    </div>

                )}

                {children}

            </main>

        </div>

    );

}