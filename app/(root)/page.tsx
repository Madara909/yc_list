// import Image from "next/image";

import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { title } from "process";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
    const query = (await searchParams).query;
    // const params = { search: query || null };

    // const session = await auth();

    // console.log(session?.id);

    // const { data: posts } = await sanityFetch({
    //     query: STARTUPS_QUERY,
    //     params,
    // });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const posts: any[] = [
        {
            _createdAt: new Date(),
            views: 55,
            author: { _id: 1, name: "Sashank" },
            _id: 1,
            description: "this is description",
            image: "https://plus.unsplash.com/premium_photo-1674476933026-aa7f5652af8a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
            category: "robot",
            title: "we robots",
        },
    ];
    return (
        <>
            <section className='pink_container'>
                <h1 className='heading'>
                    Pitch Your Startup, <br />
                    Connect With Entrepreneurs
                </h1>

                <p className='sub-heading !max-w-3xl'>
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
                    Competitions.
                </p>
                <SearchForm query={query} />
            </section>

            <section className='section_container'>
                <p className='text-30-semibold'>
                     {query ? `Search results for "${query}"` : "All Startups"}
                </p>

                <ul className='mt-7 card_grid'>
                    {posts?.length > 0 ? (
                        posts.map((post: StartupTypeCard) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ) : (
                        <p className='no-results'>No startups found</p>
                    )}
                </ul>
            </section>
        </>
    );
}
