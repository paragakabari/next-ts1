const Tooltip: React.FC<{ text: string }> = ({ text }) => (
  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
    {text}
  </div>
);

export default Tooltip;
