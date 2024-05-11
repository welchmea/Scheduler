export default function ImageCard({ title, img }: { title: String; img: any }) {
  return (
    <>
      <div className="bg-black rounded-md p-2 w-1/4 transition duration-300 ease-in-out transform hover:scale-105">
        {title}
        <img src={img} alt='' />
      </div>
    </>
  );
}
