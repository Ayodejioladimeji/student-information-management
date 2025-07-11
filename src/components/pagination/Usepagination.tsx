import { useMemo } from "react";

export const DOTS = "...";

type UsePaginationParams = {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
};

type PaginationItem = number | typeof DOTS;


const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};


export const UsePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: UsePaginationParams): PaginationItem[] => {
  const paginationRange = useMemo<PaginationItem[]>(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return []; // fallback for safety
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
