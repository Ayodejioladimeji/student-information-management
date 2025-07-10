import React, { useContext, useEffect, useState } from "react";
import { UsePagination, DOTS } from "./Usepagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { screenPixels } from "@/utils/screenpx";

type Props = {
  currentPage: number;
  totalCount: number;
  siblingCount?: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  className?: string;
};

const Paginate: React.FC<Props> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const [device, setDevice] = useState(false);


  useEffect(() => {
    screenPixels("375px", setDevice);
  }, []);

  const paginationRange = UsePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (!paginationRange || currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const numChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={`flex items-center justify-center gap-2 mt-6 ${className || ""}`}
    >
      {!device && (
        <li>
          <button
            onClick={currentPage === 1 ? undefined : onPrevious}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-full border text-sm text-gray-600 hover:bg-gray-100 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </li>
      )}

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={`dots-${index}`}>
              <span className="px-3 py-2 text-gray-500">...</span>
            </li>
          );
        }

        return (
          <li key={index}>
            <button
              onClick={() => numChange(pageNumber)}
              className={`px-4 py-2 text-sm rounded-full border cursor-pointer ${pageNumber === currentPage
                  ? "bg-gray-800 text-white border-gray-800"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      {!device && (
        <li>
          <button
            onClick={currentPage === lastPage ? undefined : onNext}
            disabled={currentPage === lastPage}
            className="px-3 py-2 rounded-full border text-sm text-gray-600 cursor-pointer hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </li>
      )}
    </ul>
  );
};

export default Paginate;
