"use client";

import type { ReactNode } from "react";

export function ConsultationButton({ children, className, dialogId = "consultation" }: {
  children: ReactNode;
  className: string;
  dialogId?: string;
}) {
  return (
    <button
      className={className}
      type="button"
      aria-haspopup="dialog"
      onClick={() => {
        const dialog = document.getElementById(dialogId);
        if (dialog instanceof HTMLDialogElement && !dialog.open) dialog.showModal();
      }}
    >
      {children}
    </button>
  );
}
