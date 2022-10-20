export default function ValidationMessage({ children, className }) {
  return (
    <div className="flex rounded-lg bg-red-100 py-3 px-2 mt-1">
      <p className="text-xs text-red-700">{children}</p>
    </div>
  );
}
