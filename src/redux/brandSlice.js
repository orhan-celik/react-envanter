import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// GET Brand
export const getBrandsAsync = createAsyncThunk('brands/getBrandsAsync', async () => {
    const response = await fetch(process.env.REACT_APP_API_URL+"Brand");
    if(response.ok){
        const brands = await response.json();
        return { brands }
    }
});

// ADD Brand
export const addBrandAsync = createAsyncThunk('brands/addBrandAsync', async (payload) => {
    const response = await fetch(process.env.REACT_APP_API_URL + "Brand/add",
        {
            method: 'POST',
            body: JSON.stringify(payload),
            header: {
                'Content-Type': 'application/json',
            },
        });

    if(response.ok){
        const Brand = await response.json();
        return { Brand }
    }
});

// DELETE Brand
export const deleteBrandAsync = createAsyncThunk('brands/deleteBrandAsync', async (payload) => {
    const response = await fetch(process.env.REACT_APP_API_URL + "Brand/delete",
        {
            method: 'POST',
            body: JSON.stringify(payload),
            header: {
                'Content-Type': 'application/json',
            },
        });

    if(response.ok){
        const Brand = await response.json();
        return { Brand }
    }
});

// UPDATE Brand
export const updateBrandAsync = createAsyncThunk('brands/updateBrandAsync', async (payload) => {
    const response = await fetch(process.env.REACT_APP_API_URL + "Brand/update",
        {
            method: 'POST',
            body: JSON.stringify(payload),
            header: {
                'Content-Type': 'application/json',
            },
        });

    if(response.ok){
        const Brand = await response.json();
        return { Brand }
    }
});

const brandSlice = createSlice({
    name : "brand",
    initialState : {
        data  : [],
        loading     : false,
        info     : {
            message     : '',
            color       : 'bg-red-500',
            type        : 'error',
            show        : false
        },
        result      : null,
        selected    : [],
        title       : 'Markalar'
    },
    reducers : {
        addBrand: (state,action) => {},
        deleteBrand: (state,action) => {
            state.data = state.data.filter((Brand) => Brand.id !== action.payload.id);
        },
        setSelected: (state,action) => {
            state.selected = action.payload
        }
    },
    extraReducers : {
        [getBrandsAsync.pending] : (state,action) => {
            state.loading = true
        },
        [getBrandsAsync.fulfilled] : (state,action) => {
            state.data = action.payload.brands
            state.loading = false
        },
        [getBrandsAsync.rejected] : (state,action) => {
            state.info = {
                message     : 'Hata : '+action.error.message,
                color       : 'bg-red-500',
                type        : 'error',
                show        : true
            };
            state.loading = false
        },
        [addBrandAsync.pending] : (state,action) => {
            state.loading = true
        },
        [addBrandAsync.fulfilled] : (state,action) => {
            state.data.unshift(action.payload.Brand);
            state.loading = false
        },
        [addBrandAsync.rejected] : (state,action) => {
            state.info = {
                message     : 'Hata : '+action.error.message,
                color       : 'bg-red-500',
                type        : 'error',
                show        : true
            };
            state.loading = false
        },
        [deleteBrandAsync.pending] : (state,action) => {
            state.loading = true
        },
        [deleteBrandAsync.fulfilled] : (state,action) => {
            const id = action.meta.arg.id;
            state.data = state.data.filter((Brand) => Brand.id !== id);
            state.loading = false
        },
        [updateBrandAsync.pending] : (state,action) => {
            state.loading = true
            console.log('bekleniyorr....');
        },
        [updateBrandAsync.fulfilled] : (state,action) => {
            const index = state.data.findIndex((item) => {
                return item.id === state.selected.id
            });
            state.data[index].title = state.selected.title;
            state.selected = []
            state.loading = false;
        },
        [updateBrandAsync.rejected] : (state,action) => {
            state.info = {
                message     : 'Hata : '+action.error.message,
                color       : 'bg-red-500',
                type        : 'error',
                show        : true
            };
            state.loading = false
        }
    }
})

export const {addBrand, deleteBrand, setSelected} = brandSlice.actions;

export default brandSlice.reducer;