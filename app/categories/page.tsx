"use client";

import React, { useEffect, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { useFetchPodcastOtherCategories, usePodcasts } from "../utils/podcastQuerry";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy, setCategory } from "../slices/podcastFilterSlice";
import { AppDispatch, RootState } from "../utils/store";
import { RiPlayLargeFill, RiPlayReverseLargeFill } from "react-icons/ri";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Spinner from "../components/Spinner";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const { sortBy, category } = useSelector((state: RootState) => state.podcastFilter);

  const queryPage = parseInt(searchParams.get("page") || "1");
  const [page, setPage] = useState(queryPage);

  useEffect(() => {
    setPage(queryPage);
  }, [queryPage]);

  const { data: podcasts, isLoading, error } = usePodcasts(page);
  const { data: categories } = useFetchPodcastOtherCategories();

  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategory(e.target.value));
    router.push("?page=1"); // reset to first page on filter
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(e.target.value as "newest" | "oldest" | "title"));
  };

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`);
  };

  // 🔍 Filtering and sorting
  const filtered = category
    ? podcasts?.data?.filter(
        (podcast) =>
          podcast.category_type?.toLowerCase() === category.toLowerCase()
      ) ?? []
    : podcasts?.data ?? [];

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title)
    }
    if (sortBy === "newest") {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      //return a.title.localeCompare(b.title);
    }
    if (sortBy === "oldest") {
      return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
    }
    return 0;
  });

  const itemsPerPage = 15;
  const isFiltering = !!category;
  const totalPages = isFiltering
    ? Math.ceil(sorted.length / itemsPerPage)
    : podcasts?.last_page || 1;

  const paginatedData = isFiltering
    ? sorted.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : sorted;
  
  console.log(sorted, "sorted")
  if (isLoading) return <Spinner />;
  if (error) return <p>Failed to load podcasts</p>;

  return (
    <div className="mt-5 mb-32">
      <div className="flex flex-col gap-4 max-w-[1200px] mx-auto">
        <h1 className="text-[28px] ml-5 text-[#5A5A5A] font-[800] max-sm:text-[20px]">ALL PODCASTS</h1>
        <hr className="w-full h-[1px] border-0 bg-[#DCDCDC]" />
        <div className="flex ml-5 mb-3 gap-5 max-sm:flex-col max-sm:gap-2">
          <div className="flex max-sm:flex-col max-md:items-start items-center gap-2">
            <p className="text-[#5A5A5A] text-[16px] font-[700]">Sort by:</p>
            <select
              className="border-[1px] cursor-pointer text-[#5A5A5A] text-[16px] font-[600] w-[100px] p-1 outline-hidden border-[#dddddd]"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option className="text-[#5A5A5A] text-[16px] font-[500]" value="">All</option>
              <option className="text-[#5A5A5A] text-[16px] font-[500]" value="title">Title</option>
              <option className="text-[#5A5A5A] text-[16px] font-[500]" value="newest">Recent</option>
              <option className="text-[#5A5A5A] text-[16px] font-[500]" value="oldest">Oldest</option>
            </select>
          </div>
          <img className="max-sm:hidden" src="/files/line.png" alt="" />
          <div className="flex items-center max-sm:items-start max-sm:flex-col gap-2">
            <p className="text-[#5A5A5A] text-[16px] font-[700]">Sort by category:</p>
            <select
              className="border-[1px] cursor-pointer  text-[#5A5A5A] text-[16px] font-[600] p-1 outline-hidden border-[#dddddd]"
              value={category}
              onChange={handleCategoryChange}
            >
              <option className="text-[#5A5A5A] text-[16px] font-[500]" value="">All Categories</option>
              <option className="text-[#5A5A5A] text-[16px] font-[500]" value="BUSINESS">Business</option>
              <option className="text-[#5A5A5A] text-[16px] font-[500]" value="ARTS">Arts</option>
              <option className="text-[#5A5A5A] text-[16px] font-[500]" value="NEWS">News</option>
              <option className="text-[#5A5A5A] text-[16px] font-[500]" value="MUSIC">Music</option>
              <option className="text-[#5A5A5A] text-[16px] font-[500]" value="SOCIETY & CULTURE">Society & Culture</option>
              <option className="text-[#5A5A5A] text-[16px] font-[500]" value="KIDS & FAMILY">Kids & Family</option>
              <option className="text-[#5A5A5A] text-[16px] font-[500]" value="SCIENCE">Science</option>
            </select>
          </div>
        </div>

        {/* Podcast Cards */}
        <div className="grid max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-3 mx-5 grid-cols-5 gap-6 max-sm:grid-cols-2 max-sm:gap-3">
          {paginatedData.map((podcast) => (
            <div key={podcast.id} className="flex flex-col max-sm:gap-[2px] gap-1">
              <img className="w-[100%] h-[180px] object-cover" src={podcast.picture_url} alt="" />
              <Link href={`/categories/${podcast.id}`}><h1 className="text-[#282828] mt-3 font-[700] max-sm:text-[16px] text-[18px]">
                {podcast.title.slice(0, 15)}...
              </h1></Link>
              <p className="text-[15px] max-sm:text-[13px] text-justify text-[#282828]">
                EPI2: {podcast.description.slice(0, 40)}...
              </p>
              <p className="text-[#828282] max-sm:text-[11px] text-[13px]">{podcast.published_at || ""}<span className="text-[#828282]">45 MINS</span>
              </p>
              <div className="flex items-center mt-3 gap-2">
                <button className="bg-[#d6d6d6] w-[30px] h-[30px] rounded-full flex justify-center items-center">
                  <img src="/files/u.png" />
                </button>
                <button className="bg-[#d6d6d6] w-[30px] h-[30px] rounded-full flex justify-center items-center">
                  <img src="/files/share.png" />
                </button>
                <button className="bg-[#d6d6d6] w-[30px] h-[30px] rounded-full flex justify-center items-center">
                  <img src="/files/gr.png" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex gap-2 justify-center mt-6">
          <button
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
            className={`cursor-pointer text-[2C2C2C] ${page === 1 && "text-[#AEAEAE]"}`}
          >
            <RiPlayReverseLargeFill />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((pg) => {
              const lastPage = totalPages;
              if (pg === 1 || pg === lastPage) return true;
              return Math.abs(pg - page) <= 1;
            })
            .map((pg, index, arr) => {
              const prevPage = arr[index - 1];
              const isEllipsisNeeded = prevPage && pg - prevPage > 1;
              return (
                <React.Fragment key={pg}>
                  {isEllipsisNeeded && (
                    <span className="px-2 text-[16px] text-[#AEAEAE] flex items-center justify-center select-none">
                      <HiDotsHorizontal />
                    </span>
                  )}
                  <button
                    onClick={() => handlePageChange(pg)}
                    className={`px-3 font-[500] text-[13px] w-[30px] h-[30px] rounded flex justify-center items-center cursor-pointer ${
                      pg === page ? "bg-[#2C2C2C] text-white" : "bg-[#AEAEAE]"
                    }`}
                  >
                    {pg}
                  </button>
                </React.Fragment>
              );
            })}
          <button
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
            className={`cursor-pointer text-[2C2C2C] ${page === totalPages && "text-[#AEAEAE]"}`}
          >
            <RiPlayLargeFill />
          </button>
        </div>

        <hr className="w-full h-[1px] mt-5 border-0 bg-[#DCDCDC]" />

        {/* Other Categories */}
        <div className="mx-5 mt-10 flex flex-col max-sm:gap-2 gap-5">
          <h1 className="text-[#5A5A5A] max-sm:text-[18px] text-[24px] font-[800]">Explore other categories</h1>
          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-3 gap-5 max-sm:gap-2 max-sm:grid-cols-2">
            {categories?.slice(0, 5).map((category) => (
              <div key={category.name} className="flex relative flex-col gap-1 mb-5">
                <img className="w-[100%] h-[160px] object-cover" src={category.image_url} alt="" />
                <div className="bg-[#000000] absolute w-full bottom-0">
                  <h1 className="text-[#ffffff] ml-4 mt-3 font-[700] text-[18px] max-sm:text-[14px]">
                    {category.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
