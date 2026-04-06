"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    window.location.href = "/login.html";
  }, [router]);

  return <div style={{ padding: 20 }}>跳转中...</div>;
}
