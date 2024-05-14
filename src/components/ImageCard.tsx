export default function ImageCard({ title, img, imageSmall, imageLarge, imageMedium }: { title: String; img: string, imageSmall: string, imageMedium: string, imageLarge:string }) {
  return (
    <>
      <div className="bg-black rounded-md p-2 w-1/4 transition duration-300 ease-in-out transform hover:scale-105">
        {title}
        <img
          srcSet={`${imageSmall} 320w, ${imageMedium} 680w, ${imageLarge} 960w, ${img} 1980w`}
          src={img}
          width=""
          height=""
          alt=""
        />
      </div>
    </>
  );
};