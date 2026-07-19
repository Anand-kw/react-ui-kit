"use client";
import Button from "@/src/components/button/Button";
import ConfirmModal from "@/src/components/model/confirm-modal/ConfirmModal";
import { useState } from "react";

export default function ButtonsPage() {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  return (
    <div>
      <h1>Buttons</h1>
      <Button title="Click Me" onClick={() => alert("Button clicked!")} />
      <Button
        title="Open Confirm Modal"
        onClick={() => setOpenConfirmModal(true)}
      />
      {openConfirmModal && (
        <ConfirmModal
          isOpen={openConfirmModal}
          onClose={() => setOpenConfirmModal(false)}
          onConfirm={() => {
            console.log("Confirmed!");
          }}
          title="Delete Item"
          message="Are you sure you want to delete this item? This action cannot be undone."
          confirmText="Delete"
          cancelText="Cancel"
          confirmVariant="danger"
        />
      )}
    </div>
  );
}
