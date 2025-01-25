import SearchForm from "@/components/SearchForm";
import { title } from "process";
import AgentCard from "@/components/AgentCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 100,
      owner: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1734899848867-02ac05338425?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "AI",
      title: "AI Agent 1",
    },
  ];
  return (
    <div>
      <section className="pink_container">
        <h1 className="heading">
          Discover Powerful AI Agents, Your Vault of Innovation
        </h1>
        <p className="sub-heading !max-w-3xl">
          Search, Learn, and Integrate AI Agents to Unlock New Possibilities.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Agents"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: AgentCardType, index: number) => (
              <AgentCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Agents Found</p>
          )}
        </ul>
      </section>
    </div>
  );
}
