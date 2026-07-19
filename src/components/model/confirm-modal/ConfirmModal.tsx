export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmVariant = "danger", // "danger" | "primary" | "success"
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: "danger" | "primary" | "success";
}) {
  if (!isOpen) return null;

  const confirmButtonStyles = {
    danger: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
    primary: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    success: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-0"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-lg shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg mx-4 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            {title}
          </h3>
        </div>

        {/* Body */}
        <div className="px-4 sm:px-6 py-6">
          <p className="text-sm sm:text-base text-gray-600">{message}</p>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-4 bg-gray-50 rounded-b-lg flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`w-full sm:w-auto px-4 py-2 text-sm font-medium text-white rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${confirmButtonStyles[confirmVariant]}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
