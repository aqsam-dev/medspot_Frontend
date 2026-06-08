import Layout from "../../components/layout/MainLayout";
import SearchBar from "../../components/pos/SearchBar";
import QuickItems from "../../components/pos/QuickItems";
import CartTable from "../../components/pos/CartTable";
import CustomerForm from "../../components/pos/CustomerForm";
import BillSummary from "../../components/pos/BillSummary";
import PaymentActions from "../../components/pos/PaymentActions";
import PaymentMode from "../../components/pos/PaymentMode";

export default function POS() {
  return (
    <Layout
      headerProps={{
        title: "Walk-in Customer Checkout",
        subtitle: "Sales & POS",
      }}
    >
      <div className="flex gap-6">

        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col gap-6">

          <SearchBar />
          <QuickItems />
          <CartTable />

        </div>

        {/* RIGHT SIDE */}
        <div className="w-96 flex flex-col gap-6">

          <CustomerForm />
          <BillSummary />
          <PaymentActions />
          <PaymentMode />

        </div>

      </div>
    </Layout>
  );
}