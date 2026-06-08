import { useState } from "react";
import Layout from "../../components/layout/MainLayout";
import QueueList from "../../components/prescription/QueueList";
import PrescriptionDetails from "../../components/prescription/PrescriptionDetail";
import PrescriptionAction from "../../components/prescription/PrescriptionAction";

export default function Prescription() {
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  return (
    <Layout
      headerProps={{
        title: "Prescription Portal",
        subtitle: "Review and process digital prescriptions",
      }}
    >
      <div className="grid grid-cols-12 gap-8">

        {/* LEFT QUEUE */}
        <div className="col-span-12 lg:col-span-4">
          <QueueList onSelect={setSelectedPrescription} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          <PrescriptionDetails prescription={selectedPrescription} />
          <PrescriptionAction prescription={selectedPrescription} />
        </div>

      </div>
    </Layout>
  );
}