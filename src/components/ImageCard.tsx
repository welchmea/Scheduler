export default function ImageCard({ title, img, imageSmall, imageMedium }: { title: String; img: string, imageSmall: string, imageMedium: string}) {
  return (
    <>
      <div className="bg-black rounded-md p-2 w-1/4 transition duration-300 ease-in-out transform hover:scale-105">
        {title}
        <img
          srcSet={`${imageSmall} 320w, ${imageMedium} 680w, ${img} 1980w`}
          src={img}
          width="400"
          height="600"
          alt=""
        />
      </div>
    </>
  );
};