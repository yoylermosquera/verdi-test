import React, { useCallback } from 'react';
import {
  CategoryFiltersProps,
  Colors,
  MultiChecks,
} from '../filters/filters-type';
import Range from '../filters/filters-type/Range';
import OnlyCheck from '../filters/filters-type/OnlyCheck';
import { useRouter } from 'next/router';
import { useAppContext } from '@/hooks';

function CategoryFilters(props: CategoryFiltersProps) {
  const { filter } = props;

  const router = useRouter();

  const { toggleSidebar } = useAppContext();


  const { asPath } = router;

  const alreadyInPage = asPath.includes(`/${filter?.categoryKey}`);

  const navigateToFilterPage = useCallback(() => {
    router.push(`/filters/${filter?.categoryKey}`);
    toggleSidebar();
  }, [filter?.categoryKey, toggleSidebar, router]);

  const shouldNavigate = props.isFromSideBar || !alreadyInPage;

  if (!filter?.type) return null;

  switch (filter?.type) {
    case 'MultiChecks':
      return (
        <MultiChecks
          {...props}
          shouldNavigateToFilterPage={shouldNavigate}
          navigateToFilterPage={navigateToFilterPage}
        />
      );

    case 'MultiCheck':
      return (
        <MultiChecks
          {...props}
          shouldNavigateToFilterPage={shouldNavigate}
          navigateToFilterPage={navigateToFilterPage}
        />
      );

    case 'Colors':
      return (
        <Colors
          {...props}
          shouldNavigateToFilterPage={shouldNavigate}
          navigateToFilterPage={navigateToFilterPage}
        />
      );

    case 'Range':
      return (
        <Range
          {...props}
          shouldNavigateToFilterPage={shouldNavigate}
          navigateToFilterPage={navigateToFilterPage}
        />
      );

    case 'OnlyCheck':
      return <OnlyCheck {...props} />;

    // collections
    // case null: {
    //   return (
    //     <section>
    //       <h3 className="uppercase text-title mb-[1.125rem]">COLLECTION</h3>
    //       <div className="px-4 flex flex-col gap-7 ">
    //         {['Sui', 'Heritage', 'Macorina', 'Aes', 'Tatami'].map(
    //           (item, index) => (
    //             <div key={index} className="flex gap-3">
    //               <CheckBox />
    //               <span className="text-title">{item}</span>
    //             </div>
    //           ),
    //         )}
    //       </div>
    //     </section>
    //   );
    // }

    default:
      return null;
  }
}

export default CategoryFilters;
