"use client";

let cachedDb: any = null;

export async function getDb() {
  if (cachedDb) return cachedDb;

  if (typeof window === "undefined") {
    return null;
  }

  const cloudbase = (await import("@cloudbase/js-sdk")).default;

  const app = cloudbase.init({
    env: "tnt-dzyanvssa",
  });

  const auth = app.auth({
    persistence: "local",
  });

  try {
    await auth.signInAnonymously();
  } catch (e) {
    console.log("匿名登录失败（可能已登录）");
  }

  cachedDb = app.database();
  return cachedDb;
}
