import Login from "@/components/account/Login";
import HomePage from "@/components/home/HomePage";
import DataProvider from "@/context/DataProvider";

export default function Home() {
  return (
    <DataProvider>
      <Login />
      <HomePage />
    </DataProvider>
  );
}
