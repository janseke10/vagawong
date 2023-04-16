import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="flex items-center place-content-between">
        <h3 className="text-3xl mb-3 leading-snug pr-3">
          <Link
            href={`/posts/${slug}`}
            className="hover:underline hover:text-purple"
            dangerouslySetInnerHTML={{ __html: title }}
          ></Link>
        </h3>
        <div className="text-lg">
          <Date dateString={date} />
        </div>
      </div>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <Avatar author={author} />
    </div>
  );
}
