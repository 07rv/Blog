import DataProvider from "@/context/DataProvider";
import LoginPage from "@/components/account/Login";

export default function Login() {
  return (
    <DataProvider>
      <LoginPage />
    </DataProvider>
  );
}
