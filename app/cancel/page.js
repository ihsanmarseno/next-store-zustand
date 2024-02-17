import Link from "next/link";

export default function CancelPage() {
  if (typeof window !== "undefined") {
    window.location.href = "/";
  }

  return (
    <div>
      Gutted
      <Link href={'/'}> Back home</Link>
    </div>
  );
}
