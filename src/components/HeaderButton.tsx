export default function HeaderButtonStyle({ title }: { title: String }) {
  return (
    <>
      <div className="flex border border-black rounded-sm hover:bg-calendarBG p-2 transition delay-50 duration-300 ease-in-out transform hover:scale-110">
        <button>{title}</button>
      </div>
    </>
  );
}
