import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/476ee033-d5dd-4f7a-bd51-2686d8ecda6c-38xdq8.jpg",
  "https://utfs.io/f/ed7d275a-d9c3-42ca-b169-8d07263eda34-dt84n0.jpg",
  "https://utfs.io/f/2eaf1575-c87a-4333-a59a-8e42d75cf594-384nta.jpg",
  "https://utfs.io/f/a636d069-d7f1-4fc3-8b53-3831a2cb1121-j7hv1g.JPG",
  "https://utfs.io/f/054f2394-001a-4710-ade8-3487cbc8d069-byd2o8.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
