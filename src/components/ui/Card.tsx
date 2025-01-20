import { PlusIcon } from "../../icons/PlusIcon";
interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div>
      <div className=" max-w-72 p-4 border rounded-md bg-white  border-gray-300 min-h-48 min-w-72">
        <div className="flex justify-between font-medium items-center  ">
          <div className=" flex ">
            <div className=" text-gray-600 pr-2">
              <PlusIcon size="lg" />
            </div>
            {title}
          </div>

          <div className="flex items-center">
            <div className="pr-2 text-gray-600">
              <a href={link} target="_blank">
                <PlusIcon size="lg" />
              </a>
            </div>

            <div className="pr-2 text-gray-600">
              <a href={link} target="_blank">
                <PlusIcon size="lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
