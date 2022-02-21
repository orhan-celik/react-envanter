import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// GET CATEGORY
export const getCategoriesAsync = createAsyncThunk('categories/getCategoriesAsync', async () => {
    const response = await fetch(process.env.REACT_APP_API_URL+"category");
    if(response.ok){
        const categories = await response.json();
        return { categories }
    }
});

// ADD CATEGORY
export const addCategoryAsync = createAsyncThunk('categories/addCategoryAsync', async (payload) => {
    const response = await fetch(process.env.REACT_APP_API_URL + "category/add",
        {
            method: 'POST',
            body: JSON.stringify(payload),
            header: {
                'Content-Type': 'application/json',
            },
        });

    if(response.ok){
        const category = await response.json();
        return { category }
    }
});

// DELETE CATEGORY
export const deleteCategoryAsync = createAsyncThunk('categories/deleteCategoryAsync', async (payload) => {
    const response = await fetch(process.env.REACT_APP_API_URL + "category/delete",
        {
            method: 'POST',
            body: JSON.stringify(payload),
            header: {
                'Content-Type': 'application/json',
            },
        });

    if(response.ok){
        const category = await response.json();
        return { category }
    }
});

// UPDATE CATEGORY
export const updateCategoryAsync = createAsyncThunk('categories/updateCategoryAsync', async (payload) => {
    const response = await fetch(process.env.REACT_APP_API_URL + "category/update",
        {
            method: 'POST',
            body: JSON.stringify(payload),
            header: {
                'Content-Type': 'application/json',
            },
        });

    if(response.ok){
        const category = await response.json();
        return { category }
    }
});

const categorySlice = createSlice({
    name : "categories",
    initialState : {
        data  : [],
        loading     : false,
        message     : null,
        result      : null,
        selected    : [],
        title       : 'Kategoriler'
    },
    reducers : {
        addCategory: (state,action) => {},
        deleteCategory: (state,action) => {
            state.data = state.data.filter((category) => category.id !== action.payload.id);
        },
        setSelected: (state,action) => {
            state.selected = action.payload
        }
    },
    extraReducers : {
        [getCategoriesAsync.pending] : (state,action) => {
            state.loading = true
        },
        [getCategoriesAsync.fulfilled] : (state,action) => {
            state.data = action.payload.categories
            state.loading = false
        },
        [addCategoryAsync.pending] : (state,action) => {
            state.loading = true
        },
        [addCategoryAsync.fulfilled] : (state,action) => {
            state.data.unshift(action.payload.category);
            state.loading = false
        },
        [addCategoryAsync.rejected] : (state,action) => {
            console.log('hata alındı');
        },
        [deleteCategoryAsync.pending] : (state,action) => {
            state.loading = true
        },
        [deleteCategoryAsync.fulfilled] : (state,action) => {
            const id = action.meta.arg.id;
            state.data = state.data.filter((category) => category.id !== id);
            state.loading = false
        },
        [updateCategoryAsync.pending] : (state,action) => {
            state.loading = true
            console.log('bekleniyorr....');
        },
        [updateCategoryAsync.fulfilled] : (state,action) => {
            console.log('tamamlandı...');
            const index = state.data.findIndex((item) => {
                return item.id === state.selected.id
            });
            state.data[index].title = state.selected.title;
            state.selected = []
            state.loading = false;
        },
        [updateCategoryAsync.rejected] : (state,action) => {
            state.loading = false
            console.log('hata oluştu....');
            console.log(action);
        }
    }
})

export const {addCategory, deleteCategory, setSelected} = categorySlice.actions;

export default categorySlice.reducer;