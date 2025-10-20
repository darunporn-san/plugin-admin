import { CustomButton } from "../Button";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <CustomButton variant="default">Default</CustomButton>
      <CustomButton variant="secondary" highlight>Secondary</CustomButton>
      <CustomButton variant="destructive">Destructive</CustomButton>
      <CustomButton variant="outline">Outline</CustomButton>
    </div>
  );
}
