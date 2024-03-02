export default function Picker({ label, value, isDisabled, onClick }) {
  const colors = {
    batu: "bg-green-400",
    gunting: "bg-blue-400",
    kertas: "bg-red-400",
  };

  if (isDisabled) return null;

  return (
    <div
      onClick={onClick}
      className={`${colors[value]} rounded-full w-52 h-52 flex justify-center items-center cursor-pointer hover:opacity-85 active:scale-[.98]`}
    >
      <p>{label}</p>
    </div>
  );
}
