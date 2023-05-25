import { CategoryFilter } from '@/services/categories/getCateriesAndFilters';

export { MultiChecks } from './MultiChecks'
export { Colors } from './Colors'

export interface CategoryFiltersProps {
    filter?: CategoryFilter;
    showTitle?: boolean;
    isFromSideBar?: boolean;
    shouldNavigateToFilterPage?: boolean;
    navigateToFilterPage?: () => void;
}
  