import SearchForm from "@/components/SearchForm";


export default async function Home({searchParams}: {
    searchParams: Promise<{ query?: string}>
}) {
    const query = (await searchParams).query;
  return (
    <div>
        <section className="pink_container">
            <h1 className="heading">Discover Powerful AI Agents, Your Vault of Innovation</h1>
            <p className="sub-heading !max-w-3xl">Search, Learn, and Integrate AI Agents to Unlock New Possibilities.</p>
            <SearchForm query={query} />
        </section>
    </div>
  );
}
