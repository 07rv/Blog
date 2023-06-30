import DataProvider from "@/context/DataProvider";
import LoginPage from "@/components/account/Login";
export default function Home() {
  return (
    <DataProvider>
      <LoginPage />
    </DataProvider>
  );
}
