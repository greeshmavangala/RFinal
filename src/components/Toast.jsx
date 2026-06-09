import { useState, useEffect } from "react";

let showToastFn = null;

export function showToast(message) {
  if (showToastFn) {
    showToastFn(message);
  }
}

export default function Toast() {
  const [toast, setToast] = useState("");

  useEffect(() => {
    showToastFn = setToast;
  }, []);

  if (!toast) return null;

  return (
    <div className="toast">
      {toast}
    </div>
  );
}