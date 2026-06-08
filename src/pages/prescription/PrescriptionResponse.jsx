import { useLocation } from "react-router-dom";
import { useState } from "react";

import Layout from "../../components/layout/MainLayout";
import PrescriptionViewer from "../../components/prescription-response/PrescriptionViewer";
import UserDetailsCard from "../../components/prescription-response/UserDetailsCard";
import MedicineFormList from "../../components/prescription-response/MedicineFormList";
import SummarySection from "../../components/prescription-response/SummarySection";
import ActionButtons from "../../components/prescription-response/ActionButtons";

export default function PrescriptionResponse() {
  const location = useLocation();

  const prescription = location.state?.prescription;

  const [medicines, setMedicines] = useState([
    {
      medicine_name: "",
      status: "available",
      quantity: 1,
      price: "",
      alternative_medicine: "",
    },
  ]);

  if (!prescription) {
    return (
      <Layout
        headerProps={{
          title: "Prescription Response",
          subtitle: "No prescription selected",
        }}
      >
        <div className="p-6">
          No prescription selected.
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      headerProps={{
        title: "Prescription Response",
        subtitle: `MP-${prescription.prescription_no}`,
      }}
    >
      <div className="grid grid-cols-12 gap-8">

        {/* LEFT */}
        <div className="col-span-12 lg:col-span-5">
          <PrescriptionViewer prescription={prescription} />
        </div>

        {/* RIGHT */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <UserDetailsCard prescription={prescription} />

          <MedicineFormList
            medicines={medicines}
            setMedicines={setMedicines}
          />

          <SummarySection medicines={medicines} />

          <ActionButtons
            prescription={prescription}
            medicines={medicines}
          />
        </div>

      </div>
    </Layout>
  );
}