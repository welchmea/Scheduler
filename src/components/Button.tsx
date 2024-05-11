export default function ButtonStyle({ title }: { title: String }) {
  return (
    <>
      <div className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-110">
        <button>{title}</button>
      </div>
    </>
  );
}
