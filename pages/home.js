import DataProvider from "@/context/DataProvider";
import HomePage from "@/components/home/HomePage";

export default function Login() {
  return (
    <DataProvider>
      <HomePage />
    </DataProvider>
  );
}
