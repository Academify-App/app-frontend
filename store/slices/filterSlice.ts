import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define filter state interface
export interface FilterState {
    categories: string[];
    levels: string[];
    priceRange: {
        min: string;
        max: string;
    };
    ratings: string[];
}

// Initial state
const initialState: FilterState = {
    categories: [],
    levels: [],
    priceRange: {
        min: '',
        max: '',
    },
    ratings: [],
};

// Create filter slice
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        // Set categories
        setCategories: (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        },
        // Set levels
        setLevels: (state, action: PayloadAction<string[]>) => {
            state.levels = action.payload;
        },
        // Set price range
        setPriceRange: (state, action: PayloadAction<{ min: string; max: string }>) => {
            state.priceRange = action.payload;
        },
        // Set ratings
        setRatings: (state, action: PayloadAction<string[]>) => {
            state.ratings = action.payload;
        },
        // Update all filters at once
        setAllFilters: (state, action: PayloadAction<FilterState>) => {
            return action.payload;
        },
        // Reset filters
        resetFilters: () => initialState,
    },
});

// Export actions
export const {
    setCategories,
    setLevels,
    setPriceRange,
    setRatings,
    setAllFilters,
    resetFilters,
} = filterSlice.actions;

// Export reducer
export default filterSlice.reducer;