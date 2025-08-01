import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const FeedbackPopup = ({ onSubmit, onCancel }) => {
  const [reason, setReason] = useState("");
  const feedbackOptions = [
    "Tidak Akurat",
    "Tidak Relevan",
    "Tidak Membantu",
    "Berbahaya",
  ];

  const handleSubmit = () => {
    if (reason) {
      onSubmit(reason);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-secondary">
            Beri kami masukan
          </h3>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600"
          >
            <FaTimes />
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Apa yang salah dengan jawaban ini?
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {feedbackOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setReason(opt)}
              className={`text-xs font-medium py-1 px-3 rounded-full border ${reason === opt ? "bg-primary text-white border-primary" : "bg-gray-100 text-secondary border-gray-200"}`}
            >
              {opt}
            </button>
          ))}
        </div>
        <textarea
          value={reason.startsWith("Tidak") ? "" : reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Tulis masukan lainnya (opsional)..."
          className="w-full p-2 border rounded-md text-sm resize-none"
          rows={3}
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            disabled={!reason}
            className="px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-purple-700 disabled:bg-gray-400"
          >
            Kirim Masukan
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPopup;
